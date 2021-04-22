const mongoose = require('mongoose');
const {
  createModel,
  addSubdocumentToModel,
  deleteSubdocument,
  filterSubdocument,
  updateSubdocument,
  findAllInSubdocument,
} = require('./reuse.js');
const { EmployerNotesModel, Note } = require('../model/employerNotes.js');

const employerNote = {
  // instatiate new employer note document
  createEmployerNoteModel: ({ email }) => createModel(EmployerNotesModel, { email }),

  getId: (email) => EmployerNotesModel.findOne({email: email}, '_id'),

  filterNotes: (employerNoteId, params) => {
    return new Promise((resolve, reject) => {
      filterSubdocument(EmployerNotesModel, employerNoteId, 'notes', params, resolve, reject)
    });
  },
  // list all employer notes
  findAllNotes: ({ employerId }) => {
    return new Promise((resolve, reject) => {
      findAllInSubdocument(EmployerNotesModel, employerId, 'notes', resolve, reject);
    });
  },
  // add to specifc employer note document
  addNote: (employerId, noteObj) => {
    return new Promise((resolve, reject) => {
      addSubdocumentToModel(EmployerNotesModel, employerId, Note, 'notes', noteObj, resolve, reject);
    });
  },
  // delete a specifc employer note document
  deleteNote: (employerId, noteId) => {
    return new Promise((resolve, reject) => {
      deleteSubdocument(EmployerNotesModel, employerId, 'notes', noteId, resolve, reject);
    });
  },
  // update a specifc employer note document
  updateNote: (employerId, noteId, updatedFields) => {
    return new Promise((resolve, reject) => {
      updateSubdocument(EmployerNotesModel, employerId, 'notes', noteId, updatedFields, resolve, reject);
    });
  }
}

module.exports = employerNote;