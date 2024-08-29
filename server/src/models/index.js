import Role from './role';
import User from './user'

User.belongsToMany(Role, {
    through: "role_code",
    foreignKey: 'userId',
    otherKey: 'roleId',
    as: 'role'
})
Role.belongsToMany(User, {
    through: "role_code",
    foreignKey: 'roleId',
    otherKey: 'userId',
    as: 'role'
})

module.exports = { User, Role };