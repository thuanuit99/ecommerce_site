import express, { raw } from "express";
const app = express();
import { sequelize } from "./src/config/database.js";
const route = require('./src/routes')
require('dotenv').config()
const PORT = process.env.CLIENT_PORT;
import cors from 'cors'
app.use(cors({
    origin: process.env.CLIENT_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],

}))
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}))
sequelize.sync({ alter: true })
    .then(() => {
        console.log('Database synchronized');
    })
    .catch((error) => {
        console.error('Error synchronizing database:', error);
    });



app.listen(PORT, () => {
    console.log(`App is running at http//:localhost:${PORT}`)

})

app.use('/', route);

