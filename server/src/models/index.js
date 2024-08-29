import { sequelize } from '../../connectdb';
import { User } from './user';
import { Role } from './role';
import { Customer } from './Customer';
const createDB = async (params) => {
    await sequelize.sync({ alter: true });
    console.log('All models were synchronized successfully.');
}
createDB()