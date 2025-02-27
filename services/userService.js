const User = require('../models/user');

async function createUser(data) {
  const user = new User(data);
  return await user.save();
}

async function getUsers() {
  return await User.find();
}

async function updateUser(id, data) {
  return await User.findByIdAndUpdate(id, data, { new: true });
}

async function deleteUser(id) {
  return await User.findByIdAndDelete(id);
}

module.exports = {
  createUser,
  getUsers,
  updateUser,
  deleteUser
};
