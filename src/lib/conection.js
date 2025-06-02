

import mysql from "mysql2/promise";


const creatconnect = mysql.createPool({
 host: process.env.DATABASE_HOST,
 user: process.env.DATABASE_USER,
 password: process.env.DATABASE_PASSWORD,
 database: process.env.DATABASE_NAME,
 waitForConnections: true,
 connectTimeout: 10000,
 connectionLimit: 10,
 queueLimit: 0,
});


// Test database connection
creatconnect.getConnection()
 .then(connection => {
   console.log("Connection has been established");
   connection.release();
 })
 .catch(err => {
   console.error("Error connecting to MySQL database:", err.message);
 });


export default creatconnect;


