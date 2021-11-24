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

    title: {
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
        default: moment().tz('Etc/GMT+1').format('DD-MM-YYYY HH:mm ZZ')
    },

    when: {
        type: Date
    }
});

const Calendar = mongoose.model('Calendar', calendarSchema);

module.exports = Calendar;