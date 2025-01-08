const { Schema, model: Model } = require("mongoose");
const balanceSchema = new Schema({
  date: {
    type: Date,
    default: Date.now,
  },
  amount: {
    cashier_1: {
      type: Number,
      required: true,
    },
    cashier_2: {
      type: Number,
      required: true,
    },
    cashier_3: {
      type: Number,
      required: true,
    },
    sport_betting: {
      type: Number,
      required: true,
    },
  },
  description: { type: String, required: true },
  error: { type: String, required: true },
});

module.exports = Model("Balance", balanceSchema);
