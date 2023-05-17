const mongoose = require("mongoose");
const mongo_url =
  "mongodb+srv://StrongMan:satya123@stock_sense.3jgx2h0.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(mongo_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=>{
    console.log("connection succesfull🚀🚀");
}).catch((err)=>{
    console.log(err);
});
