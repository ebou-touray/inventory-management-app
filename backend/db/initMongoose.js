const mongoose = require('mongoose');

//connect mongodb
module.exports = mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

//create connection
const db = mongoose.connection;
db.on('connected', () => console.log('Successfully connected to DB'));
db.on('error', (err) => console.log(`Error connecting to DB: ${err}`));
db.on('disconnected', () => console.log('DB disconnected'));
