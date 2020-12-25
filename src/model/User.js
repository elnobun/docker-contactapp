/* This file creates a logical representation of the contactManager
 * application, using the mongoose schema.
 * Documentation: https://mongoosejs.com/docs/guide.html#definition */

// import mongoose
import Mongoose from "mongoose";

/**
 * Create the user model
 * Instantiate a new instance of mongoose schema
 * @type {module:mongoose.Schema<any>}
 */
const UserSchema = new Mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  phone: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
});

const User = Mongoose.model("User", UserSchema);

export default User;
