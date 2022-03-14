


const mongoose = require("mongoose");



const BranchSchema = new mongoose.Schema(
    {
        account_number:{type:Number, required:true},
        balance:{type:Number, required:true},
        interestRate:{type:Number, required:true},
        masterId:{type:mongoose.Schema.Types.ObjectId, ref:"master"},
    },
    {
        versionKey:false,
        timestamps:true,
    }
)
module.exports = mongoose.model("branch",BranchSchema);