const mongoose = require("mongoose"); 
const traderInfoSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
      },
    email: {
        type: String,
        required: true,
        unique: true,
      },
      password: {
        type: String,
        required: true,
      },
})
const Register = new mongoose.model("StockSence", traderInfoSchema);
module.exports = Register;