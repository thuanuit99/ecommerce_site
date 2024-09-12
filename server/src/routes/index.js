const express = require('express');
const aboutRoute = require('./about');
const authRoute = require('./auth');
const route = express.Router();
console.log(typeof aboutRoute)
route.use('/about', aboutRoute);
route.use('/auth', authRoute);
module.exports = route;