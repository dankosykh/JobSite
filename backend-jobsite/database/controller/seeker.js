const mongoose = require('mongoose');
const {
  createModel,
  addSubdocumentToModel,
  deleteSubdocument,
  updateSubdocument,
  findAllInSubdocument,
  filterSubdocument
} = require('./reuse.js');
const {
  AppointmentsModel,
  SeekerNoteModel,
  ApplicationsModel,
  SavedJobsModel,
  SeekerModel
} = require('../model/seekerDataModel.js');

const seeker = {

  createSeekerModel: ({ email }) => createModel(SeekerModel, { email }),

  getId: (email) => SeekerModel.findOne({email: email}, '_id'),

  getAllData: (seekerId) => SeekerModel.findOne({_id: seekerId}),

  filterNotes: (seekerId, params) => {
    return new Promise((resolve, reject) => {
      filterSubdocument(SeekerModel, seekerId, 'notes', params, resolve, reject)
    });
  },

  filterAppointments: (seekerId, params) => {
    return new Promise((resolve, reject) => {
      filterSubdocument(SeekerModel, seekerId, 'appointments', params, resolve, reject)
    });
  },

  filterApplications: (seekerId, params) => {
    return new Promise((resolve, reject) => {
      filterSubdocument(SeekerModel, seekerId, 'applications', params, resolve, reject)
    });
  },

  filterSavedJobs: (seekerId, params) => {
    return new Promise((resolve, reject) => {
      filterSubdocument(SeekerModel, seekerId, 'savedJobs', params, resolve, reject)
    });
  },

  findAllNotes: ({seekerId}) => {
    return new Promise((resolve, reject) => {
      findAllInSubdocument(SeekerModel, seekerId, 'notes', resolve, reject);
    });
  },

  findAllAppointments: ({ seekerId }) => {
    return new Promise((resolve, reject) => {
      findAllInSubdocument(SeekerModel, seekerId, 'appointments', resolve, reject);
    });
  },

  findAllApplications: ({ seekerId }) => {
    return new Promise((resolve, reject) => {
      findAllInSubdocument(SeekerModel, seekerId, 'applications', resolve, reject);
    });
  },

  findAllSavedJobs: ({ seekerId }) => {
    return new Promise((resolve, reject) => {
      findAllInSubdocument(SeekerModel, seekerId, 'savedJobs', resolve, reject);
    });
  },

  addNote: (seekerId, noteObj) => {
    return new Promise((resolve, reject) => {
      addSubdocumentToModel(SeekerModel, seekerId, SeekerNoteModel, 'notes', noteObj, resolve, reject);
    });
  },

  addAppointment: (seekerId, appointmentObj) => {
    return new Promise((resolve, reject) => {
      addSubdocumentToModel(SeekerModel, seekerId, AppointmentsModel, 'appointments', appointmentObj, resolve, reject);
    });
  },

  addApplication: (seekerId, applicationObj) => {
    return new Promise((resolve, reject) => {
      addSubdocumentToModel(SeekerModel, seekerId, ApplicationsModel, 'applications', applicationObj, resolve, reject);
    });
  },

  addSavedJob: (seekerId, savedJobsObj) => {
    return new Promise((resolve, reject) => {
      addSubdocumentToModel(SeekerModel, seekerId, SavedJobsModel, 'savedJobs', savedJobsObj, resolve, reject);
    });
  },

  deleteNote: (seekerId, noteId) => {
    return new Promise((resolve, reject) => {
      deleteSubdocument(SeekerModel, seekerId, 'notes', noteId, resolve, reject);
    });
  },

  deleteAppointment: (seekerId, appointmentId) => {
    return new Promise((resolve, reject) => {
      deleteSubdocument(SeekerModel, seekerId, 'appointments', appointmentId, resolve, reject);
    });
  },

  deleteApplication: (seekerId, applicationId) => {
    return new Promise((resolve, reject) => {
      deleteSubdocument(SeekerModel, seekerId, 'applications', applicationId, resolve, reject);
    });
  },

  deleteSavedJob: (seekerId, savedJobId) => {
    return new Promise((resolve, reject) => {
      deleteSubdocument(SeekerModel, seekerId, 'savedJobs', savedJobId, resolve, reject);
    });
  },

  updateNote: (seekerId, noteId, updatedFields) => {
    return new Promise((resolve, reject) => {
      updateSubdocument(SeekerModel, seekerId, 'notes', noteId, updatedFields, resolve, reject);
    });
  },

  updateAppointment: (seekerId, appointmentId, updatedFields) => {
    return new Promise((resolve, reject) => {
      updateSubdocument(SeekerModel, seekerId, 'appointments', appointmentId, updatedFields, resolve, reject);
    });
  },

  updateApplication: (seekerId, applicationId, updatedFields) => {
    return new Promise((resolve, reject) => {
      updateSubdocument(SeekerModel, seekerId, 'applications', applicationId, updatedFields, resolve, reject);
    });
  },

  updateSavedJob: (seekerId, savedJobId, updatedFields) => {
    return new Promise((resolve, reject) => {
      updateSubdocument(SeekerModel, seekerId, 'savedJobs', savedJobId, updatedFields, resolve, reject);
    });
  },
}

module.exports = seeker;
