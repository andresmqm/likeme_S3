const {Pool} = require('pg');
require('dotenv').config();

const pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    allowExitOnIdle: true
});


const getHealth = async () => {
    try {
        const res = await pool.query('SELECT NOW()');
        const res2 = await pool.query('SELECT * FROM posts');

        console.log('Base de datos conectada:' + res.rows[0].now);
        console.log(res2.rows);
        return res;

    } catch (error) {
        console.error('Error al verificar la salud de la base de datos:' + error.message);
        throw error;
    }

};

module.exports = pool;
