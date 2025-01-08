const mongoose = require("mongoose");

const creditSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now,
  },
  amount: {
    type: Number,
    required: true,
  },
  subject: {
    full_name: {
      type: String,
      required: true,
    },
  },
  returned: {
    status: {
      type: Boolean,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  description: {
    type: String,
    required: true,
  },
});

const Credit = mongoose.model("Credits", creditSchema);

module.exports = Credit;
