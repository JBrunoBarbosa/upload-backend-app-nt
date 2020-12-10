const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const maquinaSchema = new Schema({    

    dias: [String],

    user: [String],
      
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

const Maquina = mongoose.model('Maquina', maquinaSchema);

module.exports = Maquina;