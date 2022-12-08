const mongoose = require('mongoose');

const travelSchema = new mongoose.Schema({
    country: String,
    majorCities: [{Type: String}],
    photos: String,
    date: String,
    recommend: {Type: Boolean, Default: true}
});

const Travel = mongoose.model('Travel', travelSchema);

module.exports = Travel;