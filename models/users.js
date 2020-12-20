const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({    
    name: { 
        type: String, 
        required: true, 
        unique: true, 
        trim: true 
    },
    
    password: { 
        type: String, 
        required: true 
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