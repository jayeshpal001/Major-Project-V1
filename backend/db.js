// db.js
const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root', //   MySQL password
  database: 'mentorship_db' // use your DB name
});

db.connect((err) => {
  if (err) throw err;
  console.log('MySQL Connected ✅');
});

module.exports = db;
