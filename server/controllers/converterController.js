const Converter = require("../models/converter");

exports.findMultiplier = (req, res, next) => {
  if ( req.params.from == "siUnit"){
    Converter.findOne({"siUnit": req.params.unit})
      .exec((err, result) => {
        if ( err ) {
          return next(err);
        }
          // res.json(result);
          if ( result ) {
          res.json({"multiplier": `${result.toEgsMultiplier}`});
          } else {
            res.json({"err": "Not Found"});
          }
      })
  }

  if ( req.params.from == "egsUnit"){
    Converter.findOne({"egsUnit": req.params.unit})
      .exec((err, result) => {
        if ( err ) {
          return next(err);
        }

        if ( result ) {
          res.json({"multiplier": `${result.toSiMultiplier}`});
        }
        else{
          res.json({err: "Not found"})
        }
      })
  }
}

exports.post = (req, res, next) => {
  const converter = new Converter({
    siUnit: req.body.siUnit,
    toSiMultiplier: req.body.toSiMultiplier,
    egsUnit: req.body.egsUnit,
    toEgsMultiplier: req.body.toEgsMultiplier
  });

  converter.save((err, result) => {
    if ( err ) {
      next ( err ) ;
    }

    console.log(result);
    res.json({msg: "Done"})
  })
}