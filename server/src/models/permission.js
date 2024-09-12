import { sequelize } from "../config/database";
import { DataTypes } from "sequelize";
const Permission = sequelize.define(
    'Permission',
    {

        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING

        },

    },

);

module.exports = Permission;