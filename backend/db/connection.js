const { Pool } = require('pg');
const config = require('@config');

const pool = new Pool({
    user: config.POSTGRES_USER,
    host: config.POSTGRES_HOST,
    database: config.POSTGRES_DB,
    password: config.POSTGRES_PASSWORD,
    port: config.POSTGRES_PORT,
});

const init = async () => {
    try {
        await pool.connect();
        console.log('Connected to the database successfully.');
    } catch (err) {
        console.error('Error connecting to the database:', err);
        process.exit(1);
    }
};

const healthCheck = async () => {
    try {
        const res = await pool.query('SELECT 1');
        if (res.rowCount === 1) {
            console.log('Database connection is healthy.');
        } else {
            console.error('Database connection health check failed.');
        }
    } catch (err) {
        console.error('Error performing health check:', err);
    }
};

module.exports = {
    init,
    healthCheck,
    pool
};