let pgp = require('pg-promise')();

// Database configuration
let config = {
    user: 'capstone',
    database: 'capstone',
    password: 'guest', // server running in docker
    host: 'localhost',
    port: 5432,
};

let db = pgp(config);

module.exports = db;