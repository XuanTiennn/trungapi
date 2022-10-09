const categoryModel = require("../../model/category/category.model");

module.exports = categoryController = {
  create: async (req, res) => {
    const newCategory = await categoryModel.create(req.body);
    return res.status(200).json(newCategory);
  },
  get: async (req, res) => {
    const isExist = await categoryModel.findOne({ id: req.params.id });
    if (isExist) {
      return res.status(200).json(isExist);
    } else {
      return res.status(400).json({ message: "Loại sản phẩm không tồn tại." });
    }
  },
  update: async (req, res) => {
    try {
      const updateCategory = await categoryModel.updateOne(
        { _id: req.body.id },
        { ...req.body }
      );
      return res.status(200).json(updateCategory);
    } catch (error) {
      console.log(error);
    }
  },
};
