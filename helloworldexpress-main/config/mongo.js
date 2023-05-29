const mongoose = require("mongoose");

const dbConnect = () => {
    const DB_URI = 'mongodb://35.165.162.232:27017/admin';
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
