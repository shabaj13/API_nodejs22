const express = require("express");
const router = express.Router();
const {getAllProducts} = require("../Controllers/controllers");


router.route("/").get(getAllProducts);

module.exports = router;