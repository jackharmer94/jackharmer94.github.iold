const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

// Route to fetch users
router.get('/users', usersController.getUsers);

// Route to add a new user
router.post('/users', usersController.addUser);

// Route to remove a user
router.delete('/users/:id', usersController.removeUser);

module.exports = router;
