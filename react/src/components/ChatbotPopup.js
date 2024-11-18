import React, { useState } from 'react';
import '../styles/ChatbotPopup.css';

const ChatbotPopup = () => {
  const [conversation, setConversation] = useState(["Hello! How can I assist you today?"]);
  const [isOpen, setIsOpen] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [expectingInput, setExpectingInput] = useState(null);

  const handleResponse = (userResponse) => {
    let newConversation = [...conversation, `You: ${userResponse}`];
    let newMessage;

    switch (userResponse) {
      case "Return an Item":
        newMessage = "Could you tell me the reason for the return? Options: Wrong Item, Damaged Item, Other";
        setExpectingInput("returnReason");
        break;
      case "Wrong Item":
      case "Damaged Item":
      case "Other":
        newMessage = "Thank you for the information. Your return request is being processed. Anything else I can help with?";
        setExpectingInput(null);
        break;
      case "Track Order":
        newMessage = "Please provide your order ID to track the order.";
        setExpectingInput("orderID");
        break;
      case "Product Inquiry":
        newMessage = "Please specify the product name or ID for more details.";
        setExpectingInput("productID");
        break;
      case "Connect to Live Support":
        newMessage = "Connecting you to a live agent. Please call +1-800-555-0199 for immediate assistance. Anything else I can help with?";
        setExpectingInput(null);
        break;
      default:
        if (expectingInput === "orderID") {
          newMessage = `Thank you! Tracking order ID ${userResponse}. Your order is in transit and will arrive soon. Anything else I can help with?`;
        } else if (expectingInput === "productID") {
          newMessage = `Thank you! Retrieving information for product ID ${userResponse}. Please wait... Anything else I can help with?`;
        } else if (expectingInput === "returnReason") {
          newMessage = "Thank you for the information. Your return request is being processed. Anything else I can help with?";
        } else {
          newMessage = "Let me know if you need further assistance.";
        }
        setExpectingInput(null);
    }

    newConversation.push(newMessage);
    setConversation(newConversation);
    setUserInput("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInput.trim() !== "") {
      handleResponse(userInput);
    }
  };

  return (
    <div className={`chatbot-popup ${isOpen ? 'open' : ''}`}>
      <button className="toggle-btn" onClick={() => setIsOpen(!isOpen)}>💬</button>
      {isOpen && (
        <div className="chatbot-content">
          {conversation.map((msg, index) => (
            <p key={index}>{msg}</p>
          ))}
          <div className="chatbot-options">
            <button onClick={() => handleResponse("Return an Item")}>Return an Item</button>
            <button onClick={() => handleResponse("Track Order")}>Track Order</button>
            <button onClick={() => handleResponse("Product Inquiry")}>Product Inquiry</button>
            <button onClick={() => handleResponse("Connect to Live Support")}>Connect to Live Support</button>
          </div>
          {expectingInput && (
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Enter here..."
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                className="user-input"
              />
              <button type="submit">Send</button>
            </form>
          )}
        </div>
      )}
    </div>
  );
};

export default ChatbotPopup;
