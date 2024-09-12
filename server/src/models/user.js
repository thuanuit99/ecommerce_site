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
            defaultValue: "Test"
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'abc@gmail.com'
        },
        password: {
            type: DataTypes.STRING
        },
        phone_number: {
            type: DataTypes.STRING,
            validate: {
                len: [10, 10],
                not: ["^[a-z]+$", 'i']
            }
        },
    },

);

module.exports = User;