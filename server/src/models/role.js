const { Sequelize, DataTypes } = require('sequelize');
import { sequelize } from '../../connectdb';
export const Role = sequelize.define(
    'Role',
    {
        // Model attributes are defined here
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            // allowNull defaults to true
        },
    },
    {
        // Other model options go here
    },
);
