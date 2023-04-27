const express = require("express");
const app = express();
const mongoose = require("mongoose");
require('dotenv').config();

app.set("view engine", "ejs");
app.use(express.static("public"));

mongoose.connect(process.env.DATABASE_URL)

const db = mongoose.connection
db.on("error", error => console.error(error))
db.on("open", () => console.log("Connected to DB"))

const indexRouter = require("./routes/index")

app.use("/",indexRouter)





app.listen(3000,(req,res) => {
console.log("App is running on port 3000");

})