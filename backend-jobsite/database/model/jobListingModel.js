const mongoose = require('mongoose');

const jobListingSchema = new mongoose.Schema({
  employerId: { type: String, required: true },
  company: {
    type: String,
    required: true,
    trim: true,
    minLength: 2,
    maxLength: 40
  },
  industry: {
    type: String,
    required: false,
    trim: true,
    minLength: 2,
    maxLength: 40
  },
  datePosted: {
    type: Date,
    required: true,
    trim: true
  },
  title: {
    type: String,
    required: false,
    trim: true,
    minLength: 2,
    maxLength: 100
  },
  employmentType: {
    type: String,
    required: false,
    enum: ['fulltime', 'parttime', 'contract', 'temporary', 'internship']
  },
  workLocationType: {
    type: String,
    required: false,
    enum: ['remote', 'onsite', 'mixed']
  },
  zipcode: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 10
  },
  city: {
    type: String,
    required: false,
    trim: true,
    minLength: 2,
    maxLength: 100
  },
  experienceLevel: {
    type: String,
    enum: ['entry', 'mid', 'senior', 'executive'],
    required: false
  },
  requirements: { required: true, type: [String] },
  benefits: { required: false, type: [String] },
  salary: {
    type: String,
    required: false,
    minLength: 2,
    maxLength: 14
  },
  jobDescription: {
    type: String,
    required: false,
    minLength: 2,
    maxLength: 500
  },
  companyDescription: {
    type: String,
    required: false,
    minLength: 2,
    maxLength: 500
  },
  seekerIds: { required: false, type: [String], default: [] }
});

const JobListingModel = mongoose.model('listing', jobListingSchema);

module.exports = JobListingModel;



