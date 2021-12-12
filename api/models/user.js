import mongoose from "mongoose";
const uniqueValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: [true] },
  email: { type: String, required: [true], unique: true},
  password: {  type: String, required: [true]},
  type: {  type: String, default: "student" , required: [true]},
  image: { type: String, default: "https://cdn2.iconfinder.com/data/icons/users-2/512/User_6-1024.png" },
  time: {
    type: Number,
    default: Date.now
  },

});

//Validator
userSchema.plugin(uniqueValidator, { message: 'Error, el email ya existe.'});

// convert to model
const User = mongoose.model('User', userSchema);

export default User;