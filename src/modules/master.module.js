


const mongoose = require("mongoose");



const MasterSchema = new mongoose.Schema(
    {
       
        balance:{type:String , required:true},
        userId:{type:mongoose.Schema.Types.ObjectId,ref:"user"},
        branchId:{type:mongoose.Schema.Types.ObjectId,ref:"branch"},
    },
    {
        versionKey:false,
        timestamps:true,
    }
)
module.exports = mongoose.model("master",MasterSchema);