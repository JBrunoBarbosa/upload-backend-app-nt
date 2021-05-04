const router = require('express').Router();
let Tarefas = require('../models/tarefa');

router.route('/').get((req, res) => {
    Tarefas.find()
        .then(tarefa => res.json(tarefa))
        .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/add').post((req, res) => {

    const tarefa = req.body;
    const newTarefa = new Tarefas (tarefa);

    newTarefa.save()
        .then(tarefa => res.json('User Added'))
        .catch(err => res.status(400).json('Error post: ' + err))

});

router.route('/delete/:id').delete((req, res) => {
   Tarefas.findByIdAndRemove(req.params.id)
        .then(tarefa =>  res.json('removed'))
        .catch(err => res.status(400).json('Error: ' + err))
});

module.exports = router;