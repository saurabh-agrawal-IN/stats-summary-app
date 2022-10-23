const mongoose = require('mongoose');
const { UserModel } = require('../models');

class UserRepository {
    async createUser({ email, password, salt, name }) {
        const user = new UserModel({
            email,
            password,
            salt,
            name,
        });
        const userResult = await user.save();
        return userResult;
    };
    
    async findUser({ email }) {
        const existingUser = await UserModel.findOne({ email: email });
        return existingUser;
    };

    async findUserById({ id }) {
        const existingUser = await UserModel.findById(id);
        return existingUser;
    };  
}
