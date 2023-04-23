// Express app
const express = require("express");
const router = express.Router();

// Controller modules
const constantsController = require("../controllers/constantsController");
const converterController = require("../controllers/converterController")

router.get("/", (req, res) => {
  res.json([{ title: "API" }]);
});

router.get("/constants", constantsController.constantList);

router.post("/constants", constantsController.createConstant);

router.get("/converter/:from/:unit", converterController.findMultiplier);

router.post("/converter", converterController.post);

module.exports = router;
