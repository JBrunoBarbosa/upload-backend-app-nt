const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const eventoSchema = new Schema({    

    event: {
        type: String, 
        required: true,
    },

    when: {
        type:Date,
        required: true,
    },
    
    user: {
        type: String, 
        required: true,
    },

    createdAt: { 
        type: Date, 
        default: Date.now
    },
});

const Evento = mongoose.model('Evento', eventoSchema);

module.exports = Evento;