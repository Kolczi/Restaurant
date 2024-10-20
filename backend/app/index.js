const express = require('express');
const config = require('@config')

// register db connection
require('@db').init();

const app = express();

// Middleware
console.log('config', config.PORT);
const port = config.PORT || 3000;

app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to the Restaurant API!');
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;