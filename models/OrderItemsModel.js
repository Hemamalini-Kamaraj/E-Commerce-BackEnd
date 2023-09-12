const mongoose = require("mongoose");

const OrderItemsSchema = new mongoose.Schema({
  totalAmount: {
    type: Number,
    required: true,
  },
  noOfItems: {
    type: Number,
    required: true,
  },
  paymentMode: {
    type: String,
    default: "COD",
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  user: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  shippingAddress: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Address",
  },
});

module.exports = mongoose.model("OrderItem", OrderItemsSchema, "OrderItems");
