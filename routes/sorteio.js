const router = require('express').Router();
let Sorteio = require('../models/sorteio');

router.route('/').get((req, res) => {
    Sorteio.find()
        .then(sorteio => res.json(sorteio))
        .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/add').post((req, res) => {

    const sorteio = req.body;
    const newSorteio = new Sorteio (sorteio);

    newSorteio.save()
        .then(sorteios => res.json('User Added'))
        .catch(err => res.status(400).json('Error post: ' + err))

});

router.route('/delete/:id').delete((req, res) => {
   Sorteio.findByIdAndRemove(req.params.id)
        .then(sorteio =>  res.json('removed'))
        .catch(err => res.status(400).json('Error: ' + err))
});

module.exports = router;