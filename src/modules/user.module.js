

const mongoose = require("mongoose");



const UserSchema = new mongoose.Schema(
    {
        firstName:{type:String , required:true},
        middleName:{type:String , required:true},
        lastName:{type:String , required:true},
        age:[{type:Number , required:true}],
        email:[{type:String , required:true}],
        address:[{type:String , required:true}],
        gender:[{type:String , required:true, default:"female"}],
        type:[{type:String , required:true}],
    },
    {
        versionKey:false,
        timestamps:true,
    }
)
module.exports = mongoose.model("User",UserSchema);