
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        firstname: {
            type: String,
            required: true,
            trim: true
        },

        lastname: {
            type: String,
            required: true,
            trim: true
        },

        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true
        },

        gender: {
            type: String,
            required: true
        },

        jobtitle: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
