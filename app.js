require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./mongoDB/database");

const product = require("./Routes/routes");

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("hi,i'm live");
})

app.use("/api/products",product)

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(PORT, () => {
      console.log(`${PORT} server is running`);
    })
  } catch (error) {
    console.log(error);
  }
};

start();