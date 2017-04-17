const db = require('mssql');

const pool = new db.ConnectionPool({
    server: '10.0.75.1',
    database: 'Dairy',
    user: 'wws_admin',
    password: "password",
    stream: true,
    parseJSON: true
});

pool.connect(err => {
    if (err) {
        console.log(err);
    }
});

export default pool;