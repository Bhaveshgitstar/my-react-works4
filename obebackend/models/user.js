const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: { type: String, unique: true, sparse: true },
    lastUsernameChange: { type: Date, required: false },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    googleId: { type: String },
    isRegistered: { type: Boolean, default: false },
    isEmailVerified: { type: Boolean, default: false },
    location: { type: String },
    gender: {
      type: String,
      enum: ["male", "female", "other"],
      required: false,
    },
    birthdate: { type: Date, required: false },

    lifeExperiences: [
      { type: mongoose.Schema.Types.ObjectId, ref: "LifeExperience" },
    ],
    role: {
      type: String,
      enum: [["Admin", "Teacher", "Coordinator"]],
      default: "Teacher",
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
  }
);

userSchema.virtual("age").get(function () {
  if (!this.birthdate) return undefined;

  const today = new Date();
  const birthdate = new Date(this.birthdate);
  let age = today.getFullYear() - birthdate.getFullYear();
  const monthDiff = today.getMonth() - birthdate.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthdate.getDate())
  ) {
    age--;
  }

  return age;
});

module.exports = mongoose.model("User", userSchema);
