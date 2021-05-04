const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tarefaSchema = new Schema({

    day: {
        type: String, 
        required: true,
    },

    whoOne: {
        type: String,
        required: true,
    },

    whoTwo: {
        type: String,
        required: false,
    },

    type: {
       type: String,
       required: false,
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

const Tarefas = mongoose.model('Tarefas', tarefaSchema);

module.exports = Tarefas;