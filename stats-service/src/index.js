const express = require('express');
const { PORT } = require('./common/config');
const { databaseConnection } = require('./database');
const statsApp = require('./stats-app');

const startServer = async() => {
    const app = express();
    await databaseConnection();
    await statsApp(app);
    app.listen(PORT, () => {
        console.log(`listening to port ${PORT}`);
    })
    .on('error', (err) => {
        console.log(err);
        process.exit();
    })
}

startServer();
