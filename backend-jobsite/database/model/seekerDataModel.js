const mongoose = require('mongoose');

const appointmentsSchema = new mongoose.Schema({
  dateCreated: { type: Date, default: Date.now },
  startTime: { type: Date, required: true },
  endTime: { type: Date, required: true },
  category: {
    type: String,
    enum: ['interview', 'phoneScreen', 'personal'],
    required: true
  },
  title: {
    type: String,
    required: true,
    maxLength: 50
  },
  appointmentNote: {
    type: String,
    required: false,
    maxLength: 1000
  }
});

const seekerNoteSchema = new mongoose.Schema({
  dateCreated: {
    type: Date,
    default: Date.now
  },
  category: {
    type: String,
    enum: ['listing', 'interview', 'application', 'personal', 'company'],
    required: true,
    default: 'personal'
  },
  title: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 50
  },
  body: {
    type: String,
    required: false,
    maxLength: 500
  },
});

const applicationsSchema = new mongoose.Schema({
    dateCreated: {type: Date, default: Date.now},
    status: {
      required: true,
      type: String,
      enum: ['started', 'submitted', 'rejected', 'interview', 'pending']},
    jobListingId: {required: true, type: String }
});

const savedJobsSchema = new mongoose.Schema({
  jobListingId: { required: true, type: String },
  interestLevel: {
    type: String,
    enum: ['1', '2', '3'],
    required: true
  }
});

const seekerDataSchema = new mongoose.Schema({
  email: {
    type: String,
    minLength: 5,
    maxLength: 255,
    required: true
  },
  appointments: {
    required: false,
    type: [appointmentsSchema]
  },
  notes: {
    required: false,
    type: [seekerNoteSchema]
  },
  applications: {
    required: false,
    type: [applicationsSchema]
  },
  savedJobs: {
    required: false,
    type: [savedJobsSchema]
  }
});

const AppointmentsModel = mongoose.model('Appointments', appointmentsSchema);
const SeekerNoteModel = mongoose.model('SeekerNote', seekerNoteSchema);
const ApplicationsModel = mongoose.model('Applications', applicationsSchema);
const SavedJobsModel = mongoose.model('SavedJobs', savedJobsSchema);
const SeekerModel = mongoose.model('Seeker', seekerDataSchema);

module.exports = {
  AppointmentsModel,
  SeekerNoteModel,
  ApplicationsModel,
  SavedJobsModel,
  SeekerModel
};
