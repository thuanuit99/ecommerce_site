import express from "express";
const app = express();
import { router } from './src/routes/index.js'
import { sequelize } from "./src/config/database.js";
import models from './src/models';
require('dotenv').config()
const PORT = process.env.CLIENT_PORT;
sequelize.sync({ force: true }) // Sử dụng force: false để không xóa và tạo lại bảng nếu đã tồn tại
    .then(() => {
        console.log('Database synchronized');
    })
    .catch((error) => {
        console.error('Error synchronizing database:', error);
    });
app.get("/", (req, res) => {
    res.send("Hello World from ExpressJS nè!!");
})
app.use('/about', router);

app.listen(PORT, () => {
    console.log(`App is running at http//:localhost:${PORT}`)
})