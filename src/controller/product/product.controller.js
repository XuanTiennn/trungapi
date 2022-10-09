const productModel = require("../../model/product/product.model");

module.exports = productController = {
  getProducts: async (req, res) => {
    try {
      const products = await productModel
        .find({ name: { $regex: req.body.search } })
        .limit(req.body.limit)
        .skip(req.body.skip)
        .sort("-createAt");
      return res.status(200).json(products);
    } catch (error) {
      console.log(error);
    }
  },
  create: async (req, res) => {
    try {
      const newProduct = await productModel.create(req.body);
      return res.status(200).json(newProduct);
    } catch (error) {
      console.log(error);
    }
  },
  get: async (req, res) => {
    try {
      const product = await productModel.findById(req.params.id);
      if (product) {
        return res.status(200).json(product);
      } else {
        return res.status(400).json({ message: "Không tồn tại sản phẩm" });
      }
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    try {
      const updateProduct = await productModel.findOneAndUpdate(
        { _id: req.body.id },
        req.body
      );
      return res.status(200).json(updateProduct);
    } catch (error) {
      console.log(error);
    }
  },
};
