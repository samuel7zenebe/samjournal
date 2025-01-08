const balanceModel = require("../models/balance.model");
const mongoose = require("mongoose");

const balanceController = require("express").Router();

const getBalance = async (req, res) => {
  try {
    const balance = await balanceModel.find();
    res.status(200).json(balance);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getBalanceByDate = async (req, res) => {
  const { date } = req.params;
  try {
    const balance = await balanceModel.find({ date });
    res.status(200).json(balance);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const addBalance = async (req, res) => {
  const balance = req.body;
  const newBalance = new balanceModel(balance);
  try {
    await newBalance.save();
    res.status(201).json(newBalance);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const editBalance = async (req, res) => {
  const { date } = req.body;
  const doc = await balanceModel.findOne({
    date,
  });
  if (!doc) {
    return res.status(404).json({ message: "Balance not found" });
  }
  try {
    await balanceModel.updateOne({ date }, req.body);
    res.status(200).json({ message: "Balance updated successfully" });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
balanceController.get("/", getBalance);
balanceController.get("/:date", getBalanceByDate);
balanceController.post("/", addBalance);
balanceController.put("/", editBalance);

module.exports = balanceController;
