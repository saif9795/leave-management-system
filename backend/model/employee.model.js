import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
    fullname:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true
    },
    dept:{
        type: String,
        required: true
    },
    pass:{
        type: String,
        required: true
    }
})

const employee = mongoose.model("Employee", employeeSchema);

export default employee;