const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ConverterSchema = new Schema({
  siUnit: { type: String },
  si10Multiplier: { type: String },
  siConstantMultiplier: { type: String, default: "1" },
  cgsUnit: { type: String },
  cgs10Multiplier: { type: String },
  cgsConstantMultiplier: { type: String, default: "1" },
});

module.exports = mongoose.model("Converter", ConverterSchema);
