// server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Initialize app
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json()); // Parses incoming JSON requests

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/mydatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connected to MongoDB");
}).catch(err => {
    console.error("Error connecting to MongoDB:", err);
});

// Schemas and Models
const ContactSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String
});

const PaymentSchema = new mongoose.Schema({
    fullName: String,
    address: String,
    city: String,
    zipCode: String,
    phoneNumber: String,
    paymentMethod: String,
    items: Array,
    totalCost: Number
});

const Contact = mongoose.model('Contact', ContactSchema);
const Payment = mongoose.model('Payment', PaymentSchema);

// Routes
app.post('/api/contact', async (req, res) => {
    try {
        const newContact = new Contact(req.body);
        await newContact.save();
        res.status(201).json({ message: 'Contact data saved successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to save contact data' });
    }
});

app.post('/api/payment', async (req, res) => {
    try {
        const newPayment = new Payment(req.body);
        await newPayment.save();
        res.status(201).json({ message: 'Payment data saved successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to save payment data' });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
