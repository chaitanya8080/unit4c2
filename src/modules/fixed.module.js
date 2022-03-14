

const mongoose = require("mongoose");



const FixedSchema = new mongoose.Schema(
    {
        account_number:{type:Number , required:true},
        balance:{type:String , required:true},
        interestRate:{type:Number , required:true},
        StartDate:{type:Number, required:true},
        maturityDate:{type:Number, required:true},
        masterId:{type:mongoose.Schema.Types.ObjectId, ref:"master"},
    },
    {
        versionKey:false,
        timestamps:true,
    }
)
module.exports = mongoose.model("fixed",FixedSchema);