const router = require('express').Router();
let TV = require('../models/horariotv');

router.route('/').get((req, res) => {
    TV.find()
        .then(tvs => res.json(tvs))
        .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/add').post((req, res) => {

    const tv = req.body;
    const newTV = new TV (tv);

    newTV.save()
        .then(tvs => res.json('User Added'))
        .catch(err => res.status(400).json('Error post: ' + err))

});

router.route('/delete/:id').delete((req, res) => {
    TV.findByIdAndRemove(req.params.id)
        .then(tvs =>  res.json('removed'))
        .catch(err => res.status(400).json('Error: ' + err))
});

module.exports = router;