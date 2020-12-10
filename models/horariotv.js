const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const horarioTVSchema = new Schema({    

    obs: {
        type: String, 
    },

    when: {
        type: Date,
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

const TV = mongoose.model('TV', horarioTVSchema);

module.exports = TV;