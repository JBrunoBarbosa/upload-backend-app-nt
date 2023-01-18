const router = require('express').Router();
let News = require('../models/news');

router.route('/').get((req, res) => {
    News.find().sort({newsCreatedAt: 'descending'})
        .then(news => res.json(news))
        .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/add').post((req, res) => {

    const newsBody = req.body;
    const news = new News (newsBody);

    news.save()
        .then(news => res.json('User Added'))
        .catch(err => res.status(400).json('Error post: ' + err))
});

router.route('/delete/:id').delete((req, res) => {
    News.findByIdAndRemove(req.params.id)
        .then(news =>  res.json('removed'))
        .catch(err => res.status(400).json('Error: ' + err))
});

module.exports = router;