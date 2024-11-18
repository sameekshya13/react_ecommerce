// PaymentGateway.js

import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/PaymentGateway.css";
import axios from "axios";

function PaymentGateway() {
  const location = useLocation();
  const navigate = useNavigate();

  const cartItems = location.state?.cartItems || [];
  const finalCost = location.state?.finalCost || 0;

  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    city: "",
    zipCode: "",
    phoneNumber: "",
    paymentMethod: "",
    items: cartItems,
    totalCost: finalCost,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePayment = async () => {
    try {
      await axios.post("http://localhost:5000/api/payment", formData);
      alert("Payment details saved successfully!");
      navigate("/"); // Redirect user after payment
    } catch (error) {
      alert("Failed to save payment details.");
      console.error(error);
    }
  };

  return (
    <div className="paymentGateway">
      <button className="backButton" onClick={() => navigate(-1)}>
        ← Back
      </button>
      <h1>Payment Gateway</h1>
      {cartItems.length === 0 ? (
        <p>No items to display. Please add items to your cart.</p>
      ) : (
        <div className="paymentSummary">
          <h2>Your Items</h2>
          {cartItems.map((item, index) => (
            <div key={index} className="cartItem">
              <img
                src={item.image}
                alt={item.name}
                className="paymentItemImage"
              />
              <div>
                <p>{item.name}</p>
                <p>Price: ${item.price}</p>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="tot">
        <p>Total Amount (including GST): ${finalCost.toFixed(2)}</p>
      </div>

      <div className="deliveryDetails">
        <h2>Delivery Address</h2>
        <input
          type="text"
          placeholder="Full Name"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Address"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="City"
          name="city"
          value={formData.city}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="ZIP Code"
          name="zipCode"
          value={formData.zipCode}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Phone Number"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
      </div>

      <div className="paymentMethods">
        <h2>Payment Method</h2>
        <label>
          <input
            type="radio"
            name="paymentMethod"
            value="upi"
            checked={formData.paymentMethod === "upi"}
            onChange={handleChange}
          />{" "}
          UPI
        </label>
        <label>
          <input
            type="radio"
            name="paymentMethod"
            value="card"
            checked={formData.paymentMethod === "card"}
            onChange={handleChange}
          />{" "}
          Credit/Debit Card
        </label>
        <label>
          <input
            type="radio"
            name="paymentMethod"
            value="netbanking"
            checked={formData.paymentMethod === "netbanking"}
            onChange={handleChange}
          />{" "}
          Net Banking
        </label>
      </div>

      <button className="payNowBtn" onClick={handlePayment}>
        Pay Now
      </button>
    </div>
  );
}

export default PaymentGateway;
