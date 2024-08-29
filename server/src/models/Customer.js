const { Sequelize, DataTypes } = require('sequelize');
import { sequelize } from '../../connectdb';
export const Customer = sequelize.define(
    'Customer',
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
        address: {
            type: DataTypes.STRING,
            // allowNull defaults to true
        },
        createTime: {
            type: DataTypes.DATE,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        }

    },
    {


    },
);
