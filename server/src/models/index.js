import Role from './role';
import User from './user'

User.belongsTo(Role, {
    foreignKey: 'roleId',
    as: 'role'
})
Role.hasOne(User, {
    foreignKey: 'roleId',
    as: 'role'
})


module.exports = { User, Role };