import express from "express";
const app = express();
import { router } from './src/routes/index.js'
import './connectdb.js';
import './src/models/index.js'
require('dotenv').config()
const PORT = process.env.CLIENT_PORT;
app.get("/", (req, res) => {
    res.send("Hello World from ExpressJS nè!!");
})
app.use('/about', router);

app.listen(PORT, () => {
    console.log(`App is running at http//:localhost:${PORT}`)
})