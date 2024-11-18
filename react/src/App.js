import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MenuItemDetails from "./pages/MenuItemDetails";
import Cart from "./pages/Cart";
import PaymentGateway from "./pages/PaymentGateway";
import ChatbotPopup from './components/ChatbotPopup'; // Import ChatbotPopup
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route
            path="/menu/:id"
            element={<MenuItemDetails addToCart={addToCart} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/cart"
            element={<Cart cartItems={cartItems} setCartItems={setCartItems} />}
          />
          <Route
            path="/payment"
            element={<PaymentGateway cartItems={cartItems} setCartItems={setCartItems} />}
          />
        </Routes>
        <Footer />
        <ChatbotPopup /> {}
      </Router>
    </div>
  );
}

export default App;
