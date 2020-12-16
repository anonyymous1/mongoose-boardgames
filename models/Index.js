const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/BoardGame', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = {
    BoardGame: require('./BoardGame')
}