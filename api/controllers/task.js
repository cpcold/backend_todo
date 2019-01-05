const Task = require('../models/task');
const bcrypt = require('bcrypt-nodejs');
const jwt = require('jsonwebtoken');

exports.getAllTask = (req, res, next) => {
    res.status(200).json({
        message: "getAllTask WOrking",
    });
};

exports.addNewTask = (req, res, next) => {
    res.status(200).json({
        message: "addNewTask WOrking",
    });
};

exports.editExistingTask = (req, res, next) => {
    res.status(200).json({
        message: "editExistingTask wORKING",
    });
};

exports.deleteTask = (req, res, next) => {
    res.status(200).json({
        message: "deleteTask WOrking",
    });
};

exports.changeStatus = (req, res, next) => {
    res.status(200).json({
        message: "changeStatus WOrking",
    });
};

exports.shareToOtherUser = (req, res, next) => {
    res.status(200).json({
        message: "shareToOtherUser wORKING",
    });
};

exports.getSpecificTask = (req, res, next) => {
    res.status(200).json({
        message: "getSpecificTask WOrking",
    });
};
