const { getUsers, addUsers } = require('../controllers/usersController');

const usersRoute = require('express').Router();

usersRoute.get('/users', getUsers);
usersRoute.post('/users', addUsers);

module.exports = usersRoute;
