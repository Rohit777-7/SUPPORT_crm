const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const ticketRoutes = require("./src/routes/ticketRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/tickets", ticketRoutes);

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("MongoDB Connected");

    app.listen(5000, () => {
        console.log("Server Running");
    });
})
.catch((err) => console.log(err));