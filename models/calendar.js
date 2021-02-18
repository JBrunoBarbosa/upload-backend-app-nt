const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const calendarSchema = new Schema({    

    description: {
        type: String,     
    },

    user: {
        type: String, 
        required: true,
    },

    passou: {
        type: Boolean,
        required: true,
        default: false,
    },

    categoria: {
        type: String,
    },

    createdAt: { 
        type: Date, 
        default: Date.now
    },
});

const Calendar = mongoose.model('Calendar', calendarSchema);

module.exports = Calendar;