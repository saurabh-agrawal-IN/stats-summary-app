const mongoose = require('mongoose');
const { StatsModel } = require('../models');

class StatsRepository {
    async createRecord(data) {
        const record = new StatsModel({ ...data });
        const statsResult = await record.save();
        return statsResult;
    };

    async deleteRecord(name) {
        const statsResult = await StatsModel.deleteOne({ name: name });
        return statsResult;
    };
    
    async findUser({ email }) {
        const existingUser = await StatsModel.findOne({ email: email });
        return existingUser;
    };

    async findUserById({ id }) {
        const existingUser = await StatsModel.findById(id);
        return existingUser;
    };  
}

module.exports = StatsRepository;