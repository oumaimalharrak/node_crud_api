const mysql = require('mysql');
const dotenv = require('dotenv')
dotenv.config();
//  mysql connection 
const dbconnect = mysql.createConnection({
    host: 'localhost',
    user : 'superuser',
    password: '',
    database: 'node_crud_db',
    db_port: 3306

})

dbconnect.connect((err) => {
    if (err) throw err;
    console.log('Connected!');
  });


module.exports = dbconnect;