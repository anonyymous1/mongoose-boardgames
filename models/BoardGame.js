const mongoose = require('mongoose');

const creatorSchema = new mongoose.Schema({
    name: String,
    company: String,
});

const BoardGameSchema = new mongoose.Schema({
    title: String,
    year: Number,
    numPlayers: String,
    typeOfGame: String,
    timeToPlay: String,
    creator: [creatorSchema] 
})

const BoardGame = mongoose.model('BoardGame', BoardGameSchema)

module.exports = BoardGame