const mongoose = require("mongoose");

const dbConnect = () => {
    const DB_URI = 'mongodb://35.163.197.148:27017/admin';
    mongoose.connect(DB_URI,{
        user: "admin",
        pass: "luisAguilar2106",
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {conexion = true;})
    .catch (err => {conexion = false;});
};

module.exports = dbConnect