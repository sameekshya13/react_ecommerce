import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { MenuList } from "../helpers/MenuList";
import "../styles/MenuItemDetails.css";

function MenuItemDetails({ addToCart }) {
  const { id } = useParams();
  const menuItem = MenuList[id];
  const navigate = useNavigate();
  
  const [selectedSize, setSelectedSize] = useState("");
  const [cartMessage, setCartMessage] = useState(false);

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const handleAddToCart = () => {
    addToCart(menuItem);
    setCartMessage(true);
    setTimeout(() => setCartMessage(false), 3000); // Hide message after 3 seconds
  };

  const handleBuyNow = () => {
    const itemsForPayment = [{ ...menuItem, quantity: 1 }]; // Passing the item as an array with one object
    const totalPrice = menuItem.price * 1.18; // Assuming 18% GST
  
    navigate(`/payment`, { state: { cartItems: itemsForPayment, finalCost: totalPrice } });
  };
  

  return (
    <div className="menuItemDetails">
      <button className="backButton" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <div className="menuItemDetails-image">
        <img src={menuItem.image} alt={menuItem.name} />
      </div>
      <div className="menuItemDetails-info">
        <h1>{menuItem.name}</h1>
        <p className="menuItemDetails-price">${menuItem.price}</p>
        <p className="menuItemDetails-rating">Rating: {menuItem.rating} ★</p>
        <p className="menuItemDetails-description">{menuItem.description}</p>

        <div className="menuItemDetails-sizes">
          <h3>Select Size:</h3>
          <div className="size-options">
            {menuItem.sizes.map((size, index) => (
              <button
                key={index}
                className={`size-btn ${selectedSize === size ? "active" : ""}`}
                onClick={() => handleSizeClick(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div className="menuItemDetails-buttons">
          <button className="menuItemDetails-btn buyNow" onClick={handleBuyNow}>
            Buy Now
          </button>
          <button className="menuItemDetails-btn addToCart" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>

        {cartMessage && <p className="cartNotification">Item added to cart!</p>}
      </div>
    </div>
  );
}

export default MenuItemDetails;
