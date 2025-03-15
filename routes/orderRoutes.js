const express = require('express');
const Order = require('../models/Order');
const router = express.Router();

router.post('/submit-order', (req, res) => {
    const { partNumber, phoneNumber, userId } = req.body;

    Order.create(partNumber, phoneNumber, userId, (err, orderId) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ id: orderId });
    });
});

module.exports = router;