const User = require('../models/user');
const bcrypt = require('bcrypt-nodejs');
const jwt = require('jsonwebtoken');

exports.user_signup = (req, res, next) => {
    User.find({
        email: req.body.email
    })
    .exec()
    .then(user => {
        if (user.length >= 1) {
            return res.status(409).json({
                message: "Mail Exist"
            });
        } else {
            bcrypt.hash(req.body.password, null, null, (err, hash) => {
                if (err) {
                    res.status(500).json({
                        error: err
                    });
                } else {
                    const user = new User({
                        name: req.body.name,
                        gender: req.body.gender,
                        contact: req.body.contact,
                        country:req.body.country,
                        email: req.body.email,
                        password: hash
                    });
                    user
                        .save()
                        .then(result => {
                            res.status(200).json({
                                message: 'User Created'
                            });
                        })
                        .catch(err => {
                            res.status(500).json({
                                error: err
                            });
                        });
                }
            });
        }
    });
   
};

exports.user_login = (req, res, next) => {
    User.find({
        email: req.body.email
    })
    .exec()
    .then(users => {
        if (users.length < 1) {
            return res.status(404).json({
                message: 'Authorization Failed'
            });
        }
        bcrypt.compare(req.body.password, users[0].password, (err, result) => {
            if (err) {
                return res.status(404).json({
                    message: 'Authorization Failed'
                });
            }
            if (result) {
                const token = jwt.sign({
                        email: users[0].email,
                        userId: users[0]._id
                    },
                    process.env.JWT_KEY, {
                        expiresIn: "1h"
                    });
                return res.status(200).json({
                    message: 'Authorization Successful',
                    token: token
                });
            }
            res.status(404).json({
                message: 'Authorization Failed'
            });
        });
    })
    .catch(err => {
        res.status(500).json({
            error: err
        });
    });
};

exports.user_forgetpassword = (req, res, next) => {
   
};
