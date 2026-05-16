const express = require("express");

const Order = require("../models/Order");

const {
  authMiddleware,
  adminMiddleware,
} = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", authMiddleware, async (req, res) => {
  try {
    const order = new Order({
      ...req.body,
      user: req.user.id,
    });

    await order.save();

    res.status(201).json(order);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/my-orders", authMiddleware, async (req, res) => {
  try {
    const orders = await Order.find({
      user: req.user.id,
    });

    res.json(orders);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/", authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const orders = await Order.find().populate("user", "name email");

    res.json(orders);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
