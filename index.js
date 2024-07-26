const express = require('express');
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello from the REST API.");
})

app.listen(port, () => console.log(`Running the sample app. App is listening to port ${port}`))