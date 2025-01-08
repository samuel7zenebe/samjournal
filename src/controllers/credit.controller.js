const creditModel = require("../models/credit.model");
const mongoose = require("mongoose");

const creditController = require("express").Router();

const getCredit = async (req, res) => {
  try {
    const credit = await creditModel.find();
    res.status(200).json(credit);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getCreditByDate = async (req, res) => {
  const { date } = req.params;
  try {
    const credit = await creditModel.find({ date });
    res.status(200).json(credit);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const addCredit = async (req, res) => {
  const credit = req.body;
  const newcredit = new creditModel(credit);
  try {
    await newcredit.save();
    res.status(201).json(newcredit);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const editCredit = async (req, res) => {
  const { date } = req.body;
  const doc = await creditModel.findOne({
    date,
  });
  if (!doc) {
    return res.status(404).json({ message: "credit not found" });
  }
  try {
    await creditModel.updateOne({ date }, req.body);
    res.status(200).json({ message: "credit updated successfully" });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
creditController.get("/", getCredit);
creditController.get("/:date", getCreditByDate);
creditController.post("/", addCredit);
creditController.put("/", editCredit);

module.exports = creditController;
