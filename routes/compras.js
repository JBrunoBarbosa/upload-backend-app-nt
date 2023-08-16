const router = require('express').Router();
let Compras = require('../models/compras');

router.route('/').get((req, res) => {
    Compras.find()
        .then(compras => res.json(compras))
        .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/add').post((req, res) => {

    const compras = req.body;
    const newCompras = new Compras (compras);

    newCompras.save()
        .then(compras => res.json('Compras Adicionadas'))
        .catch(err => res.status(400).json('Error post: ' + err))

});

router.route('/delete/:id').delete((req, res) => {
    Compras.findByIdAndRemove(req.params.id)
        .then(compras =>  res.json('removed'))
        .catch(err => res.status(400).json('Error: ' + err))
});

module.exports = router;
