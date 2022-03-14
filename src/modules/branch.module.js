


const mongoose = require("mongoose");



const BranchSchema = new mongoose.Schema(
    {
        Name:{type:String , required:true},
        address:[{type:String , required:true}],
        IFSC:[{type:String , required:true}],
        MICR:[{type:String , required:true}],
    },
    {
        versionKey:false,
        timestamps:true,
    }
)
module.exports = mongoose.model("branch",BranchSchema);