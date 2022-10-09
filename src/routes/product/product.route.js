const express = require("express");
const productController = require("../../controller/product/product.controller");
const router = express.Router();

router
  .route("/product")
  .post(productController.create)
  .put(productController.update)
  .get(productController.get);
router.route("/product/search").post(productController.getProducts);
module.exports = router;
