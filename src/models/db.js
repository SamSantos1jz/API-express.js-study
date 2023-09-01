const mysql = require('mysql2/promise');

const db = mysql.createPool({
    host: 'localhost', 
    port: 3002,
    user: 'root', 
    password: 'root' 
});

module.exports = db;