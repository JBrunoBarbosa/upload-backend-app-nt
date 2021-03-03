var SHA256 = require("crypto-js/sha256");
const router = require('express').Router();
let User = require('../models/users');

router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('error: ' + err))
});

router.route('/add').post((req, res) => {

    const user  = req.body;
    const newUser = new User (user)
    newUser.password = SHA256(newUser.password).toString();

    newUser.save()
        .then(users => res.json('User Added'))
        .catch(err => res.status(400).json('error: ' + err))

});

router.route('/delete/:id').delete((req, res) => {
    User.findByIdAndRemove(req.params.id)
        .then(users =>  res.json('removed'))
        .catch(err => res.status(400).json('error: ' + err))
});

module.exports = router;