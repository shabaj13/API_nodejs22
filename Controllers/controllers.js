const Product = require("../Model/product");


const getAllProducts = async (req, res) => {
  const { company, name } = req.query;
  const queryObj = {};

  if (company) {
    queryObj.company = company
  };
  if (name) {
    queryObj.name = { $regex: name, $options: "i" };
  };
  console.log(queryObj);

  const myData = await Product.find(queryObj)
  res.status(200).json({myData});
};


module.exports = {getAllProducts};