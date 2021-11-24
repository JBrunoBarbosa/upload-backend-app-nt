const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const schemaOpts = { toJSON: { virtuals: true } };
const moment = require('moment-timezone');

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
        default: dateThailand
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