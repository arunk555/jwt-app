const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  first_name: { type: String, default: null },
  last_name: { type: String, default: null },
  email: { type: String, required:true, lowercase:true, unique: true },
  password: { type: String, required:true },
  token: { type: String },
  createdAt:{
    type:Date,
    immutable:true,
    default:()=>Date.now()
  },
  updatedAt:{
    type:Date,
    immutable:true,
    default:()=>Date.now()
  }
});

module.exports = model("user", userSchema);
