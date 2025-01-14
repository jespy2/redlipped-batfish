const express = require('express');
const path = require('path');
const PORT = 3000;
const app = express();
const db = require('../models/dbModel.js');
const apiroute = require('./routes/api.js');

app.use('/build', express.static(path.join(__dirname, '../build')));

app.use('/api', apiroute);

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../index.html'));
})

app.listen(PORT);