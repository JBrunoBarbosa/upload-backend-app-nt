const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const objetoSchema = new Schema({    

    objeto: {
        type: String, 
        required: true,
    },

    user: {
        type: String, 
        required: true,
    },

    fromWhere: {
        type: String,
        required: true,
    },

    whereIsIt : {
        type: String,
        required: true,
    },

    quantity: {
        type: Number,
    },

    createdAt: { 
        type: Date, 
        default: Date.now
    },
});

const Objeto = mongoose.model('Objeto', objetoSchema);

module.exports = Objeto;