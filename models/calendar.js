const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var data = new Date();
var dataFormatada = ("0" + data.getDate()).substr(-2) + "/" 
    + ("0" + (data.getMonth() + 1)).substr(-2) + "/" + data.getFullYear();

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

    when: {
        type: Date
    }
});

calendarSchema.virtual("adjustedTime").get(function(){
    return moment.tz('Etc/GMT+1').format('DD-MM-YYYY HH:mm');
});

const Calendar = mongoose.model('Calendar', calendarSchema);

module.exports = Calendar;