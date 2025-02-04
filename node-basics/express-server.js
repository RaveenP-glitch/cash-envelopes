const express = require('express');

const app = express();
const port = 3000;

app.use((req, res, next) => {
    console.log('Middleware request received');
    next();
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something broke!");
});

app.get('/name', (req, res) => {
    res.send('Hello from Express.js');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});