const express = require("express");
const mongoose = require("mongoose");

const userController = require("./controllers/user.controller")
const savingController = require("./controllers/saving.controller")
const fixedController = require("./controllers/fixed.controller")
const branchController = require("./controllers/branch.controller")
const masterController = require("./controllers/master.controller")

const connect = require("./config/db");

const app = express();
app.use(express.json());

app.use("/user",userController);
app.use("/branch",branchController);
app.use("/master",masterController);
app.use("/saving",savingController);
app.use("fixed",fixedController);



app.listen(7777,async function(){
    try {
        await connect();
        console.log("listining 7777")
    } catch (error) {
        console.log("error : ",error);
    }
});
