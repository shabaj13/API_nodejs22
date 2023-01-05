const mongoose = require("mongoose");


const connectDB = (uri) => {
  console.log("yoh");
  return mongoose.connect(uri,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
mongoose.set("strictQuery","true");

module.exports = connectDB;