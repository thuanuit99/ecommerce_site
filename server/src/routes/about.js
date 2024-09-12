const express = require('express');
const route = express.Router();
import * as userController from '../controller';
route.get('/id/:id', userController.getUser)

module.exports = route;