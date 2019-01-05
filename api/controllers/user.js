const User = require('../models/user');
const bcrypt = require('bcrypt-nodejs');
const jwt = require('jsonwebtoken');

exports.user_signup = (req, res, next) => {
    
    res.status(200).json({
        message: "SignUp WOrking",
    });
};

exports.user_login = (req, res, next) => {
    res.status(200).json({
        message: "Login WOrking",
    });
};

exports.user_forgetpassword = (req, res, next) => {
    res.status(200).json({
        message: "Forget PaSSWORD wORKING",
        task_id: req.params.task_id
    });
};
