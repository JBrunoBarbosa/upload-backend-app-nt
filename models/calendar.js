const mongoose = require('mongoose');
const moment = require('moment-timezone');
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
        default: moment.tz(Date.now(), "America/Bahia");
    },

    when: {
        type: Date
    }
});

const Calendar = mongoose.model('Calendar', calendarSchema);

module.exports = Calendar;