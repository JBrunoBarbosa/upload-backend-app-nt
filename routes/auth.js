var SHA256 = require("crypto-js/sha256");
let Users = require('../models/users');
const router = require('express').Router();

router.route('/').post((req, res) =>  {
    
    res.setHeader('Content-Type', 'application/json');

    if (!req.body.login) {
        res.end(JSON.stringify({ error: "missing login parameter" }));
    }
    else if (!req.body.password) {
        res.end(JSON.stringify({ error: "missing password parameter" }));
    } else {
        
        var userName = req.body.login
        var userPass = req.body.password

        Users.find({ 'name': userName }, function(err, users) {
            if (err) throw err;
          
            users.forEach(function(user) {

                res.setHeader('Content-Type', 'application/json');

                if (user.name == userName && (user.password == userPass || user.password == SHA256(userPass))) {

                    res.end(JSON.stringify({ user_name: user.name, user_img: user.img }));
            
                } else {
                    res.end(JSON.stringify({ message: "User incorreto" }));
                }
            });
          });
    }
});

module.exports = router;