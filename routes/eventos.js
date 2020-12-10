const router = require('express').Router();
let Evento = require('../models/eventos');

router.route('/').get((req, res) => {
    Evento.find()
        .then(eventos => res.json(eventos))
        .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/add').post((req, res) => {

    const evento = req.body;
    const newEvento = new Evento (evento);

    newEvento.save()
        .then(evento => res.json('User Added'))
        .catch(err => res.status(400).json('Error post: ' + err))

});

router.route('/delete/:id').delete((req, res) => {
    Evento.findByIdAndRemove(req.params.id)
        .then(eventos =>  res.json('removed'))
        .catch(err => res.status(400).json('Error: ' + err))
});
module.exports = router;