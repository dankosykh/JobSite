const mongoose = require('mongoose');
const { db } = require('../config');

mongoose.connect(db.url, {useNewUrlParser: true, useUnifiedTopology: true});

const dbConnect = mongoose.connection

dbConnect.on('error', () => {
  console.log('connection error:')
});

dbConnect.once('open', () => {
  console.log('connected to MongoDB');
});

module.exports = dbConnect;