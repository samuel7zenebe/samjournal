const otherModel = require("../models/other.model");
const mongoose = require("mongoose");

const otherController = require("express").Router();

const getOther = async (req, res) => {
  try {
    const other = await otherModel.find();
    res.status(200).json(other);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getOtherByDate = async (req, res) => {
  const { date } = req.params;
  try {
    const other = await otherModel.find({ date });
    res.status(200).json(other);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const addOther = async (req, res) => {
  const other = req.body;
  const newother = new otherModel(other);
  try {
    await newother.save();
    res.status(201).json(newother);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const editOther = async (req, res) => {
  const { date } = req.body;
  const doc = await otherModel.findOne({
    date,
  });
  if (!doc) {
    return res.status(404).json({ message: "other not found" });
  }
  try {
    await otherModel.updateOne({ date }, req.body);
    res.status(200).json({ message: "other updated successfully" });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
otherController.get("/", getOther);
otherController.get("/:date", getOtherByDate);
otherController.post("/", addOther);
otherController.put("/", editOther);

module.exports = otherController;
