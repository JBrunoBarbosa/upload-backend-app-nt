const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const comprasSchema = new Schema({    

    iten: {
        type: String, 
        required: true,
    },

    user: {
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

const Compras = mongoose.model('Compras', comprasSchema);

module.exports = Compras;