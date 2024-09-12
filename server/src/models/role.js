import { sequelize } from "../config/database";
import { DataTypes } from "sequelize";
const Role = sequelize.define(
    'Role',
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

module.exports = Role;