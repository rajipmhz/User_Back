const User = require('../../models/Users');
const { encryptPassword } = require('../../utils/auth');

const createUser = async (userData) => {
    const user = (await User.create({
        ...userData,
        password: await encryptPassword(userData.password)
    })).toJSON();

    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
};

const getAllUsers = async () => {
    return await User.findAll();
};

const getUserById = async (id) => {
    return await User.findByPk(id);
};

const updateUser = async (id, data) => {
    await User.update(data, { where: { id } });
    return await User.findByPk(id);
};

const deleteUser = async (id) => {
    return await User.destroy({ where: { id } });
};

module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
};
