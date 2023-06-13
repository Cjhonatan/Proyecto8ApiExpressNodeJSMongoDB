const express = require ("express");
const router = express.Router();

const userController = require("../controllers/userControllers");
const authController = require("../controllers/authController");

router.get('/', userController.getAllUser);
router.post('/', userController.createUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);
router.post('/login', authController.authenticateUser);

module.exports =  router;