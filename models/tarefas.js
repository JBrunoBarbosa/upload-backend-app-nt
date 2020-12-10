const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tarefasSchema = new Schema({    

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

const Tarefas = mongoose.model('Tarefas', tarefasSchema);

module.exports = Tarefas;