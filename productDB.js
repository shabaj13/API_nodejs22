require("dotenv").config();
const connectDB = require("./mongoDB/database");
const Product = require("./Model/product");
const product_json = require("./product.json");

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    await Product.create(product_json);
    console.log("success");
  } catch (error) {
    console.log(error);
  }
}
start();