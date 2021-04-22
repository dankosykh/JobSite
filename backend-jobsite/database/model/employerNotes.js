const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  dateCreated: { type: Date, default: Date.now },
  category: {
    type: String,
    enum: ['candidate', 'interview', 'listing', 'personal'],
    required: true
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

const employerNotesSchema = new mongoose.Schema({
  email: {
    type: String,
    minLength: 5,
    maxLength: 255,
    required: true
  },
  notes: {
    required: false,
    type: [noteSchema]
  }
});

const EmployerNotesModel = mongoose.model('employerNotes', employerNotesSchema);
const Note = mongoose.model('note', noteSchema);

module.exports = { EmployerNotesModel, Note };


