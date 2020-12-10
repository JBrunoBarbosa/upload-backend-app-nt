const router = require('express').Router();
let Objetoo = require('../models/objetos');

router.route('/').get((req, res) => {
    Objetoo.find()
        .then(objsEmprestados => res.json(objsEmprestados))
        .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/add').post((req, res) => {

    const objsEmprestados = req.body;
    const newObjetosEmprestados = new Objetoo (objsEmprestados);

    newObjetosEmprestados.save()
        .then(objs => res.json('User Added'))
        .catch(err => res.status(400).json('Error post: ' + err))

});

router.route('/delete/:id').delete((req, res) => {
    Objetoo.findByIdAndRemove(req.params.id)
        .then(objetos =>  res.json('removed'))
        .catch(err => res.status(400).json('Error: ' + err))
});
module.exports = router;