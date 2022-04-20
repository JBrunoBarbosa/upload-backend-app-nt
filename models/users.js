const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({    
    name: { 
        type: String, 
        trim: true 
    },
    
    password: { 
        type: String
    },
    
    createdAt: { 
        type: Date, 
        default: Date.now
    },

    ponitsNumber: {
        type: Number,
    },

    img: {
        type: String,
    },

    tag: {
        type: String, 
    }

});

const User = mongoose.model('User', userSchema);

module.exports = User;