const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const moment = require('moment-timezone');
const brazilianDate = moment(new Date(Date.now)).format('DD-MM-YYYY');

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
        default: new Date("2017-03-16T17:46:53.677" + "+07:00").toLocaleString()
    },

    when: {
        type: Date
    }
});

calendarSchema.virtual("adjustedTime").get(function(){
    return moment.tz('Etc/GMT+1').format('DD-MM-YYYY HH:mm');
});

const Calendar = mongoose.model('Calendar', calendarSchema);

module.exports = Calendar;