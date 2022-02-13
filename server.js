require('dotenv').config()

const express = require('express');

const app = express();

app.use(express.static('www'));

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log("Server started");
});