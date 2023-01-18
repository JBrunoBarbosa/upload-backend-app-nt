var SHA256 = require("crypto-js/sha256");
const router = require('express').Router();

let User     = require('../models/users');
let Calendar = require('../models/calendar')
let Compras  = require('../models/compras')
let Games    = require('../models/game')
let News     = require('../models/news')
let Objects  = require('../models/objetos')
let Points   = require('../models/pontos')

router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('error: error found'))
});

router.route('/add').post((req, res) => {

    const user  = req.body;
    const newUser = new User (user)
    newUser.password = SHA256(newUser.password).toString();

    newUser.save()
        .then(users => res.json('User Added'))
        .catch(err => res.status(400).json('error: error found'))

});

router.route('/update/:id').put((req, res) => {

    Calendar.updateMany ( { user: req.body.oldName },        { $set: { user : req.body.name }})
    Compras.updateMany  ( { user: req.body.oldName },        { $set: { user : req.body.name }})  
    Games.updateMany    ( { cardUserAdd: req.body.oldName }, { $set: { cardUserAdd : req.body.name }} )  
    Objects.updateMany  ( { user: req.body.oldName },        { $set: { user: req.body.name }})    
    Points.updateMany   ( { forWho: req.body.oldName },      { $set: { forWho: req.body.name }})    
    
    User.findByIdAndUpdate(
        req.params.id,
        {
            name: req.body.name,
            img: req.body.img
        }

    ).then(users =>  res.json('updated'))
    .catch(err => res.status(400).json('error: error found'))

});

router.route('/delete/:id').delete((req, res) => {
    User.findByIdAndRemove(req.params.id)
        .then(users =>  res.json('removed'))
        .catch(err => res.status(400).json('error: error found'))
});

module.exports = router;