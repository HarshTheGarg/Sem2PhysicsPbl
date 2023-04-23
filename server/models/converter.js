const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ConverterSchema = new Schema({
  siUnit: {type: String},
  toSiMultiplier: {type: String},
  egsUnit: {type: String},
  toEgsMultiplier: {type: String},
})

module.exports = mongoose.model("Converter", ConverterSchema);