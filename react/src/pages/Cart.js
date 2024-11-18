import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Cart.css"; // Create and style your Cart page here

function Cart({ cartItems, setCartItems }) {
  const navigate = useNavigate();

  // Calculate total cost of all cart items
  const totalCost = cartItems.reduce((acc, item) => acc + item.price, 0);

  // Assuming GST is 18%
  const gst = totalCost * 0.18;
  const finalCost = totalCost + gst;

  const handleDelete = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart); // Update cartItems after deletion
  };

  const handleCheckout = () => {
    if (cartItems && cartItems.length > 0) {
      navigate(`/payment`, { state: { cartItems, finalCost } }); // Pass items and total cost as state
    } else {
      alert("Your cart is empty.");
    }
  };
  return (
    <div className="cart">
      <h1>My Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="cartItems">
            {cartItems.map((item, index) => (
              <div key={index} className="cartItem">
                <img src={item.image} alt={item.name} />
                <div className="itemDetails">
                  <p>{item.name}</p>
                  <p>Price: ${item.price}</p>
                  <button className="deleteButton" onClick={() => handleDelete(item.id)}>
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="cartSummary">
            <p>Total Cost: ${totalCost.toFixed(2)}</p>
            <p>GST (18%): ${gst.toFixed(2)}</p>
            <p>Final Cost: ${finalCost.toFixed(2)}</p>
            <button className="checkoutButton" onClick={handleCheckout}>
              Proceed to Payment
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
