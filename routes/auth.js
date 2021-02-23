var SHA256 = require("crypto-js/sha256");
let Users = require('../models/users');
const router = require('express').Router();

router.route('/').post((req, res) =>  {
    
    res.setHeader('Content-Type', 'application/json');

    if (!req.body.login) {
        res.status(404).json('Error: parameter login not found')
    } else if (!req.body.password) {
        res.status(404).json('Error: parameter password not found')
    } else {

        var userNameReq = req.body.login
        var userPassReq = req.body.password

        Users.find({ 'name': userNameReq }, function(err, users) {
            if (err) throw err;
            
            if (users.length == 0)
                res.status(404).json('Error: user not found')

            users.forEach(function(user) {
                
                if (user.password == userPassReq) {
                    res.end(JSON.stringify({ user_name: userNameReq, user_img: user.img }));
                } else {
                    res.status(404).json('Error: pass not found') 
                }
            });
        });

    }

});

module.exports = router;