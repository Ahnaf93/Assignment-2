const mongoose = require("mongoose");
mongoose.Promise = require("bluebird");

const url = "mongodb+srv://Ahnaf93:TAhmid93@cluster0-kb1r0.mongodb.net/test?retryWrites=true&w=majority";

const connect = mongoose.connect(url, { useNewUrlParser: true });

module.exports = connect;
