const { Schema, model } = require("mongoose");

const addressSchema = new Schema({
  street: { type: String, default: null },
  city: { type: String, default: null },
});

const userSchema = new Schema({
  first_name: { type: String, default: null },
  last_name: { type: String, default: null },
  email: { type: String, required:true, lowercase:true, unique: true },
  password: { type: String, required:true },
  address: addressSchema,
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

userSchema.methods.sayHi=function(){
  console.log(`Hi, My name is ${this.first_name}`);
}

userSchema.statics.findByName=function(){
 return this.find({name:new RegExp(name,"i")});
}

userSchema.query.byName=function(){
 return this.where({name:new RegExp(name,"i")});
}

userSchema.virtual('namedEmail').get(function(){
 return `${this.first_name} <${this.email}>`;
});
/* Middleware inside the mongoose pre or post*/
userSchema.pre('save',function(next){
 this.updatedAt=Date.now();
 next();
});

userSchema.post('save',function(doc, next){
 doc.sayHi();
 next();
});
module.exports = model("user", userSchema);
