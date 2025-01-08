const debitModel = require("../models/debit.model");
const mongoose = require("mongoose");

const debitController = require("express").Router();

const getDebit = async (req, res) => {
  try {
    const debit = await debitModel.find();
    res.status(200).json(debit);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getDebitByDate = async (req, res) => {
  const { date } = req.params;
  try {
    const debit = await debitModel.find({ date });
    res.status(200).json(debit);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const addDebit = async (req, res) => {
  const debit = { date: req.body.date.split("T")[0], ...req.body };
  const newdebit = new debitModel(debit);
  try {
    await newdebit.save();
    res.status(201).json(newdebit);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const editDebit = async (req, res) => {
  const { date } = req.body;
  const doc = await debitModel.findOne({
    date,
  });
  if (!doc) {
    return res.status(404).json({ message: "debit not found" });
  }
  try {
    await debitModel.updateOne({ date }, req.body);
    res.status(200).json({ message: "debit updated successfully" });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
debitController.get("/", getDebit);
debitController.get("/:date", getDebitByDate);
debitController.post("/", addDebit);
debitController.put("/", editDebit);

module.exports = debitController;
