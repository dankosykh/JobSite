const express = require('express');
const { application } = require('../config');
const cors = require('cors');
const dbConnect = require('../database/database.js');
// router
const listingRoutes = require('./routes/listing.js');
const resumeRoutes = require('./routes/resume.js');
const seekerDataRoutes = require('./routes/seekerData.js');
const employerRoutes = require('./routes/employerData.js');

const app = express();

// middleware
app.use(cors());
app.use(express.static('client/dist'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routes
app.use('/api/seekerdata', seekerDataRoutes);
app.use('/api/employerdata', employerRoutes);
app.use('/api/listing', listingRoutes);
app.use('/api/resume', resumeRoutes);

app.listen(application.port, () => {
  console.log('Client server listening on ' + application.port)
});
