const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const login = require('./routers/login.routes');

const app = express();

mongoose
  .connect(process.env.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('connect has started...'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', login);

module.exports = app;
