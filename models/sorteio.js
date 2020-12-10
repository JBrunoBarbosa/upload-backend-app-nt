const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const sorteioSchema = new Schema({    

    rooms: [String],

    users: [String],

    period: {
        type: String, 
        required: true,
    },

    createdBy: { 
        type: String, 
        required: true,
    },

    createdAt: { 
        type: Date, 
        default: Date.now
    },
});

const Sorteio = mongoose.model('Sorteio', sorteioSchema);

module.exports = Sorteio;