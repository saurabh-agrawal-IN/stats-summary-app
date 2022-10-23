const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StatsSchema = new Schema({
    name: String,
    salary: Number,
    currency: String,
    on_contract: Boolean,
    department: String,
    sub_department: String
});

module.exports =  mongoose.model('stats', StatsSchema);
