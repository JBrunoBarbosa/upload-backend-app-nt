const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const pontosSchema = new Schema({    

    obs: {
        type: String, 
        required: true,
    },

    forWho: {
        type: String,
        required: true,
    },

    user: { 
        type: String, 
        required: true,
    },

    period: {
        type: String, 
        required: true,
    },

    imageUrl: {
        type: String, 
        required: true,
    },

    createdAt: { 
        type: Date, 
        default: Date.now
    }
});

const Ponto = mongoose.model('Ponto', pontosSchema);

module.exports = Ponto;