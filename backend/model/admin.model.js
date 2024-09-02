import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    fullname:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true
    },
    pass:{
        type: String,
        required: true
    }
})

const Admin = mongoose.model("Admin", adminSchema,"admin");

export default Admin;