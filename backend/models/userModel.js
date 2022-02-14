const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please enter a name!'],
    },
    email: {
      type: String,
      required: [true, 'Please enter your email!'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Please enter a password!'],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('Users', userSchema);
