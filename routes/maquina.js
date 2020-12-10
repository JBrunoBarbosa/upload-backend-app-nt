const router = require('express').Router();
let Maquina = require('../models/maquina');

router.route('/').get((req, res) => {
    Maquina.find()
        .then(diasMaquina => res.json(diasMaquina))
        .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/add').post((req, res) => {

    const diasMaquina = req.body;
    const newEscalaMaquina = new Maquina (diasMaquina);

    newEscalaMaquina.save()
        .then(maquina => res.json('User Added'))
        .catch(err => res.status(400).json('Error post: ' + err))

});

router.route('/delete/:id').delete((req, res) => {
    Maquina.findByIdAndRemove(req.params.id)
        .then(diasMaquina =>  res.json('removed'))
        .catch(err => res.status(400).json('Error: ' + err))
});
module.exports = router;