import mongoose from "mongoose";
import validator from "validator" ;

const appointmentSchema = new mongoose.Schema({
    firstName : {
        type : String,
        required : true,
        minLength : [3, "First Name Must Contain Atleast 3 Characters"]
    },
    lastName : {
        type : String,
        required : true,
        minLength : [3, "First Name Must Contain Atleast 3 Characters"]
    },
    email : {
        type : String,
        required : true,
        validate : [validator.isEmail, "Please Provide a valid email"]
    },
    phone : {
        type : String,
        required : true,
        minLength : [10, "Phone Number must contain exact 10 digits"],
        maxLength : [10, "Phone Number must contain exact 10 digits"]
    },
    nic : {
        type : String,
        required : true,
        minLength : [12, "Aadhar must contain  12 digits"],
        maxLength : [12, "Aadhar must contain  12 digits"]
    },
    dob : {
        type : Date,
        required: [true, "DOB is required"]
    },
    gender:{
        type : String,
        required : true,
        enum : ["Male", "Female"]
    },
    appointment_date:{
        type : String,
        required : true
    },
    department:{
        type : String,
        required : true,
    },
    doctor:{
        firstName:{
            type : String,
            required : true,
        },
        lastName:{
            type : String,
            required : true,
        }
    },
    hasVisited: {
        type: Boolean,
        default : false
    },
    doctorId:{
        type : mongoose.Schema.ObjectId,
        required : true
    },
    patientId:{
        type : mongoose.Schema.ObjectId,
        required : true
    },
    address : {
        type : String,
        required : true
    },
    status : {
        type : String,
        enum : ["Pending", "Accepted", "Rejected"],
        default : "Pending"
    }
})

export const Appointment = mongoose.model("Appointment", appointmentSchema)