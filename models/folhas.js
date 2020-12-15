const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const folhasSchema = new Schema({    

    nameOrHino: {
        type: String,
        required: true, 
    },

    nickName: {
        type:String,
    },

    were: {
        type: String,
        required: true,
    },

    course:{
        type: String,
    },

    img: {
        type: String,
    },

    user: {
        type: String,
        required: true,
    },

    category: {
        type: String,
        required: true,
    },

    createdAt: { 
        type: Date, 
        default: (Date.now.getDate + "/" + (Date.now.getMonth) + "/" + (Date.now.getFullYear) + " " + (Date.now.getHours) + ":" + (Date.now.getMinutes)), 
    },
});

const Folhas = mongoose.model('Folhas', folhasSchema);

module.exports = Folhas;