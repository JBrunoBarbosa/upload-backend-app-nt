const router = require('express').Router();
let Ponto = require('../models/pontos');

router.route('/').get((req, res) => {
    Ponto.find()
        .then(ponto => res.json(ponto))
        .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/add').post((req, res) => {

    const ponto = req.body;
    const newPonto = new Ponto (ponto);

    newPonto.save()
        .then(pontos => res.json('User Added'))
        .catch(err => res.status(400).json('Error post: ' + err))

});

router.route('/delete/:id').delete((req, res) => {
    Ponto.findByIdAndRemove(req.params.id)
        .then(pontos =>  res.json('removed'))
        .catch(err => res.status(400).json('Error: ' + err))
});
module.exports = router;