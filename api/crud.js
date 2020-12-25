/* This file performs the CRUD (Create, Read, Update, Delete)
operations of the application */

// Import user model
import User from "../src/model/User.js";

// Class model for User
class UserApi {
  // Function to return all users from the database
  // call: find()
  getAll = async () => {
    return User.find({});
  };

  // Function to create user to the database
  // call: save()
  createUser = async (user) => {
    // create a new instance of the user
    const userToCreate = new User(user);
    // save the user
    return userToCreate.save();
  };

  // Function to delete user from the database by id
  // call: findByIdAndDelete()
  deleteUser = async (id) => {
    return User.findByIdAndDelete(id);
  };

  // Function to update user to the database
  // call: findByIdAndUpdate
  updateUser = async (id, user) => {
    return User.findByIdAndUpdate(id, user, { new: true });
  };
}

export default UserApi;
