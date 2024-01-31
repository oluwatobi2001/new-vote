const mongoose = require('mongoose');
const dotenv= require("dotenv")
mongoose.set('debug', true);
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_URL);


module.exports.User = require('./user');
module.exports.Poll = require('./polls');
