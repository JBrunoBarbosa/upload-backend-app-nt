const router = require('express').Router();
let Calendar = require('../models/game');

router.route('/').get((req, res) => {
    Calendar.find()
        .then(calendar => res.json(calendar))
        .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/add').post((req, res) => {

    const calendar = req.body;
    const newCalendar = new Calendar (calendar);

    newCalendar.save()
        .then(calendar => res.json('Card add'))
        .catch(err => res.status(400).json('Error post: ' + err))
});

router.route('/delete/:id').delete((req, res) => {
    Calendar.findByIdAndRemove(req.params.id)
        .then(calendar =>  res.json('Card removed'))
        .catch(err => res.status(400).json('Error: ' + err))
});

module.exports = router;