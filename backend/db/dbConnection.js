import mysql from "mysql2";

const pool = mysql.createConnection(
    {
        host : "localhost",
        user : "root",
        password : "",
        database : "leave_management_system"
    }
).promise();

export default pool;