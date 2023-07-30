// server/server.js
const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());

const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'foodapp',
};

app.get('/api/menu', async (req, res) => {
    try {
        const connection = await mysql.createConnection(dbConfig);
        const [rows] = await connection.execute('SELECT * FROM menu_items');
        connection.end();

        res.json(rows);
    } catch (error) {
        console.error('Error fetching menu items:', error);
        res.status(500).json({ error: 'Error fetching menu items' });
    }
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
