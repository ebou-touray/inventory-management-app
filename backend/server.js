const express = require('express');
const dotenv = require('dotenv');
import colors from 'colors';

dotenv.config();

const app = express();

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.get('/api/regsiter', (req, res) => {
  res.send('API is running...');
});

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
