const mongoose = require("mongoose");

// Define schema
const saleSchema = new mongoose.Schema({
  orderTime: {
    type: Date,
    required: true,
  },
  product: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  orderValue: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Sale", saleSchema);
