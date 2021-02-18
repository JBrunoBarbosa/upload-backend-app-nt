const router = require('express').Router();
let Calendar = require('../models/calendar');

router.route('/').get((req, res) => {
    Calendar.find()
        .then(calendar => res.json(calendar))
        .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/add').post((req, res) => {

    const calendar = req.body;
    const newCalendar = new Calendar (calendar);

    newCalendar.save()
        .then(calendar => res.json('User Added'))
        .catch(err => res.status(400).json('Error post: ' + err))

});

module.exports = router;