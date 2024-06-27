const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: { type: String, unique: true, sparse: true },
    password: { type: String },
    gender: {
      type: String,
      enum: ["male", "female", "other"],
      required: false,
    },

    // lifeExperiences: [
    //   { type: mongoose.Schema.Types.ObjectId, ref: "LifeExperience" },
    // ],
    role: {
      type: [String],
      enum: ["Admin", "Teacher", "Coordinator"],
      default: "Teacher",
    },
    course: {
      type: [String],
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
  }
);

module.exports = mongoose.model("User", userSchema);
