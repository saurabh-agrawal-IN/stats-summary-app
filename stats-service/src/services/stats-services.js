const { statsRepository } = require("../database");
const {
    formatData,
} = require('../common/utils');

class StatsService {
    constructor() {
        this.repository = new statsRepository();
    }

    async createRecord (data) {
        const result = await this.repository.createRecord(data);
        return FormateData(result);
    }

    async removeRecord (name) {
        const result = await this.repository.deleteRecord(name);
        return formatData(result);
    }
}

module.exports = StatsService;
