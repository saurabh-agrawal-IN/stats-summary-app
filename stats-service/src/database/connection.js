const mongoose = require('mongoose');
const { DB_URL } = require('../common/config');

module.exports = async() => {
    try {
        await mongoose.connect(DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log('Successful Database Connection.');   
    } catch (error) {
        console.error('Error in Database Connection.: ', error);
    }
};
