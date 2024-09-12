const express = require('express');
const route = express.Router();
route.get('/', (req, res) => {
    res.send('Đây là trang Auth');
})
route.get('/about', (req, res) => {
    res.send('Đây là trang about Auth');
})

module.exports = route;