const userModel = require("../models/user.model");

module.exports.createUser = async ({ firstname, lastname, email, password }) => {
  // Check if user already exists
  const existingUser = await userModel.findOne({ email });
  if (existingUser) {
    throw new Error("Email already exists");
  }

  const user = await userModel.create({
    fullName: { firstname, lastname },
    email,
    password,
  });


  const userDoc = user.toObject(); 
delete userDoc.password;
return userModel.findById(user._id);
};

module.exports.findUserByCredentials = async (email, password) => {
  // Remove .lean() to retain Mongoose methods
  const user = await userModel.findOne({ email });
  
  if (!user) throw new Error("Invalid email or password");
  
  const isMatch = await user.comparePassword(password);
  if (!isMatch) throw new Error("Invalid email or password");

  return user; // Full Mongoose document with methods
};

module.exports.findUserByEmail = async (email) => {
  const user = await userModel.findOne({ email });
  if (user) {
    const userObject = user.toObject();
    delete userObject.password;
    return userObject;
  }
  return null;
};