const router = require('express').Router();
let Folhas = require('../models/folhas');

router.route('/').get((req, res) => {
    Folhas.find()
        .then(folhas => res.json(folhas))
        .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/add').post((req, res) => {

    const folhas = req.body;
    const newFolhas = new Folhas (folhas);

    newFolhas.save()
        .then(folhas => res.json('User Added'))
        .catch(err => res.status(400).json('Error post: ' + err))

});

router.route('/delete/:id').delete((req, res) => {
    Folhas.findByIdAndRemove(req.params.id)
        .then(folhas =>  res.json('removed'))
        .catch(err => res.status(400).json('Error: ' + err))
});
module.exports = router;