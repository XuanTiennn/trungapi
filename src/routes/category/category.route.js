const express = require("express");
const categoryController = require("../../controller/category/category.controller");
const router = express.Router();

router
  .route("/category")
  .post(categoryController.create)
  .get(categoryController.get)
  .put(categoryController.update);

module.exports = router;
