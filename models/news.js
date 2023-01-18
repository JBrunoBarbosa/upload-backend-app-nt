const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const newsSchema = new Schema({    

    newsTitle: {
        type: String,
        required: true, 
    },

    newsDescription: {
        type: String,
        required: true,
    },

    newsCreatedAt: { 
        type: Date, 
        default:Date.now, 
    },
});

const News = mongoose.model('News', newsSchema);

module.exports = News;