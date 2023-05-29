const mongoose = require("mongoose");

const dbConnect = () => {
    const DB_URI = 'mongodb://54.190.198.155:27017/admin';
    mongoose.connect(DB_URI,{
        user: "admin",
        pass: "Passwd123",
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {connected = true;})
    .catch (err => {connected = false;});
};

module.exports = dbConnect