import { sequelize } from "../config/database";
import { DataTypes } from "sequelize";
const User = sequelize.define(
    'User',
    {

        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true
        }
    },

);

module.exports = User;