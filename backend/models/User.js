import mongoose from "mongoose";
import randomNum from "../helpers/randomNumber.js";

const userSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    token: {
        type: String,
        default: randomNum()
    },
    confirmado: {
        type: Boolean,
        default: false
    }
});

const User = mongoose.model("User", userSchema);

export default User;