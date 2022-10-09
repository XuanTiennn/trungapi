const userModel = require("../../model/user/user.model");
// const bcrypt = require("bcrypt");
module.exports = UserController = {
  registerUser: async (req, res) => {
    const isExist = await userModel.findOne({ email: req.body.email });
    if (!isExist) {
      // const passwordHash = await bcrypt.hash(req.body.password, 10);
      const newUser = await userModel.create({
        ...req.body,
        // password: passwordHash,
      });
      return res.status(200).json(newUser);
    } else {
      return res.status(400).json({ message: "Email đã được sử dụng!" });
    }
  },
  loginUser: async (req, res) => {
    const existUser = await userModel.findOne({ email: req.body.email });
    if (existUser) {
      // const mathPassword = await bcrypt.compare(
      //   req.body.password,
      //   existUser.password
      // );
      if (req.body.password === existUser.password) {
        return res.status(400).json({ message: "Mật khẩu không đúng!" });
      } else {
        return res.status(200).json({ message: "Thành công" });
      }
    }
  },
};
