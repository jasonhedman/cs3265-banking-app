const mysql = require('mysql2')

const db = mysql.createConnection({
    host: "localhost",
    user: "aaa",
    // database:"banking_app" 
})

module.exports = db;