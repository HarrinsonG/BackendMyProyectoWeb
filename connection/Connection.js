var mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://Harry1202:Harry1202@cluster0.gvrhf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Base de datos lista para usar");
  });

module.exports = mongoose;
