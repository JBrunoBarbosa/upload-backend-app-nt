const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const gameSchema = new Schema({    

    cardTitle: {
        type: String,
        required: true, 
    },

    cardDescription: {
        type: String,
        required: true,
    },

    cardUserAdd: {
        type: String,
        required: true,
    },

    cardCreatedAt: { 
        type: Date, 
        default:Date.now, 
    },
});

const Game = mongoose.model('Game', gameSchema);

module.exports = Game;