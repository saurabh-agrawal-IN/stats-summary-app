const mongoose = require('mongoose');
const { StatsModel } = require('../models');

class StatsRepository {
    async addRecord({ .... }) {
        const record = new StatsModel({
            email,
            password,
            salt,
            name,
        });
        const statsResult = await record.save();
        return statsResult;
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
