const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json()); 

mongoose.connect("mongodb://localhost:27017/devDB")
    .then(() => console.log("connected to MongoDB"))
    .catch(err => console.error("connection error:", err));

const userSchema = new mongoose.Schema({
    name: String,
    email: String
});
const User = mongoose.model("User", userSchema);

app.get("/users", async (req, res) => {
    try {
        const users = await User.find(); 
        res.json(users); 
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(3000, () => console.log("server runs on the port 3000"));
