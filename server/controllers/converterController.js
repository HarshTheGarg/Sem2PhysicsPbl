const Converter = require("../models/converter");

exports.findMultiplier = (req, res, next) => {
  if (req.params.from == "siUnit") {
    Converter.findOne({ siUnit: req.params.unit }).exec((err, result) => {
      if (err) {
        return next(err);
      }
      // res.json(result);
      if (result) {
        res.json({
          tenMultiplier: `${result.cgs10Multiplier}`,
          unit: `${result.cgsUnit}`,
          constant: `${result.cgsConstantMultiplier}`,
        });
      } else {
        res.json({ err: "Not Found" });
      }
    });
  }

  if (req.params.from == "cgsUnit") {
    Converter.findOne({ cgsUnit: req.params.unit }).exec((err, result) => {
      if (err) {
        return next(err);
      }

      if (result) {
        res.json({
          tenMultiplier: `${result.si10Multiplier}`,
          unit: `${result.siUnit}`,
          constant: `${result.siConstantMultiplier}`,
        });
      } else {
        res.json({ err: "Not found" });
      }
    });
  }
};

exports.getAll = (req, res, next) => {
  if (req.params.unit == "siUnit") {
    Converter.find({}, "siUnit").exec((err, result) => {
      if (err) {
        next(err);
      }

      res.json(result);
    });
  } else if (req.params.unit == "cgsUnit") {
    Converter.find({}, "cgsUnit").exec((err, result) => {
      if (err) {
        next(err);
      }

      res.json(result);
    });
  }
};

exports.post = (req, res, next) => {
  const converter = new Converter({
    // siUnit: req.body.siUnit,
    // toSiMultiplier: req.body.toSiMultiplier,
    // cgsUnit: req.body.cgsUnit,
    // toCgsMultiplier: req.body.toCgsMultiplier,
    siUnit: req.body.siUnit,
    si10Multiplier: req.body.si10Multiplier,
    siConstantMultiplier: req.body.siConstantMultiplier,
    cgsUnit: req.body.cgsUnit,
    cgs10Multiplier: req.body.cgs10Multiplier,
    cgsConstantMultiplier: req.body.cgsConstantMultiplier,
  });

  converter.save((err, result) => {
    if (err) {
      next(err);
    }

    console.log(result);
    res.json({ msg: "Done" });
  });
};
