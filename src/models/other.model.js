const mongoose = require("mongoose");

const otherSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now,
  },
  amount: {
    type: Number,
    required: true,
  },
  payment_type: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Other = mongoose.model("Others", otherSchema);
module.exports = Other;
