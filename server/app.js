const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const bodyParser = require('body-parser');
const login = require('./routers/login.routes');
const portfolio = require('./routers/portfolio.routes');

const app = express();

mongoose
  .connect(process.env.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('connect has started...'));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use('/api', login);
app.use('/api', portfolio);

module.exports = app;
