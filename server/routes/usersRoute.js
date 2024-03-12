const { getUsers, addUsers, getUsersById, deleteUsers, updateUsers } = require('../controllers/usersController');

const usersRoute = require('express').Router();

usersRoute.get('/users', getUsers);
usersRoute.get('/users/:id', getUsersById);
usersRoute.post('/users', addUsers);
usersRoute.put('/users/:id', updateUsers);
usersRoute.delete('/users/:id', deleteUsers);

module.exports = usersRoute;
