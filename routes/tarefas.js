const router = require('express').Router();
let Tarefa = require('../models/tarefas');

router.route('/').get((req, res) => {
    Tarefa.find()
        .then(tarefas => res.json(tarefas))
        .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/add').post((req, res) => {

    const tarefas = req.body;
    const newEscalaTarefas = new Tarefa (tarefas);

    newEscalaTarefas.save()
        .then(tarefas => res.json('User Added'))
        .catch(err => res.status(400).json('Error post: ' + err))

});

router.route('/delete/:id').delete((req, res) => {
    Tarefa.findByIdAndRemove(req.params.id)
        .then(tarefas =>  res.json('removed'))
        .catch(err => res.status(400).json('Error: ' + err))
});
module.exports = router;