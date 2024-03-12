const getUsers = require('../controllers/usersController');

const usersRoute = require('express').Router();

usersRoute.get('/users', getUsers);

module.exports = usersRoute;
