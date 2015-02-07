var mongoose = require('mongoose');

mongoose.connect('mongodb://vijayliebe:iliebe101251@ds027739.mongolab.com:27739/elance');

module.exports = mongoose.connection;