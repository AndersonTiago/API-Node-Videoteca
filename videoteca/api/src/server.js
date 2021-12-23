require('dotenv').config();

const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const connectToDatabse = require('./database')

// chama a função que conecta no banco
connectToDatabse()

const app = express();
const port = 3000;

app.use(routes);
app.listen(port, () => {
    console.log(`Backend started at http://localhost:${port}`);
});

