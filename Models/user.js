const jwt = require("jsonwebtoken");
const Joi = require('joi');
const { Schema, model } = require("mongoose");

const userSchema = Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: 5,
    maxlenth: 255,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlenth: 1024,
  },
});

userSchema.method.generateJWT = function () {
  const token = jwt.sign(
    { _id: this._id, email: this.email },
    process.env.JWT_SECRET_KEY,
    { expiresIn: "3h" }
  );
  return token;
};

const validateUser = (user) => {
  const Joi = require("joi");
  const schema = Joi.object({
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(5).max(255).required(),
  });
  return schema.validate(user);
};

module.exports.User = model("User", userSchema);
module.exports.validate=validateUser;