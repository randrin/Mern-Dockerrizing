const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      unique: true,
      trim: true,
      required: "First name required",
      minlength: [2, "First name too short"],
      maxlength: [50, "First name too long"],
    },
    lastName: {
      type: String,
      unique: true,
      trim: true,
      required: "Last name required",
      minlength: [2, "Last name too short"],
      maxlength: [50, "Last name too long"],
    },
    dateOfBorn: { type: String, trim: true },
    emailVerified: {
      type: Boolean,
      trim: true,
      default: false,
    },
    pseudo: { type: String, minlength: 5, maxlength: 15, unique: true },
    status: {
      type: String,
      enum: ["Pending", "Active", "Disabled", "Suspended"],
      default: "Pending",
    },
    sex: { type: String, default: "Male" },
    email: { type: String, index: true, unique: true },
    phoneNumber: { type: String, unique: false },
  },
  {
    timestamps: true,
  }
);
const User = mongoose.model("User", userSchema);
module.exports = User;
