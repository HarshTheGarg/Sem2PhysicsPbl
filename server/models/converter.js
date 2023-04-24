const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ConverterSchema = new Schema({
  siUnit: {type: String},
  toSiMultiplier: {type: String},
  cgsUnit: {type: String},
  toCgsMultiplier: {type: String},
})

module.exports = mongoose.model("Converter", ConverterSchema);