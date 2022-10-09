const connect = require("./config/index");
const cors = require("cors");
const express = require("express");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const userRoute = require("./routes/user/user.routes");
const categoryRoute = require("./routes/category/category.route");
const productRoute = require("./routes/product/product.route");
const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use("/api", userRoute);
app.use("/api", categoryRoute); 
app.use("/api", productRoute);
connect.connect();

if (process.env.MODE_ENV === "production") {
}

app.listen(port, () => {
  console.log("run from port:", port);
});
