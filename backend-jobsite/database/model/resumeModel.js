const mongoose = require('mongoose');
const { fieldsOfStudy } = require('./enums.js');

const resumeSchema = new mongoose.Schema({
  seekerId: { type: String, required: true},
  firstName: {
    type: String,
    required: true,
    trim: true,
    minLength: 1,
    maxLength: 40
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    minLength: 2,
    maxLength: 40
  },
  email: {
    type: String,
    minLength: 5,
    maxLength: 255,
    required: true
  },
  phone: {
    type: String,
    validate: {
      validator: function(v) {
        return /\d{3}-\d{3}-\d{4}/.test(v);
      },
      message: props => `${props.value} is not a valid phone number!`
    },
    required: [true, 'User phone number required']
  },
  links: {
    required: false,
    type: {
      linkedin: { type: String },
      other: { type: String },
    },
  },
  city: {
    type: String,
    required: false,
    trim: true,
    minLength: 2,
    maxLength: 100
  },
  zipcode: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 5
  },
  education: {
    required: false,
    type: [{
      institution: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 60
      },
      yearGraduated: {
        type: String,
        required: true,
        length: 4
      },
      degreeType: {
        type: String,
        enum: ['Diploma', 'Associates', 'Bachelors', 'PhD', 'other'],
        required: true,
        minLength: 2,
        maxLength: 30
      },
      fieldOfStudy: {
        type: String,
        emun: fieldsOfStudy,
        required: true,
      }
    }]
  },
  workExperience: {
    required: false,
    type: [{
      employer: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 60
      },
      title: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 60,
      },
      startDate: {type: Date},
      endDate: {type: Date},
      description: {
        type: String,
        required: false,
        minLength: 2,
        maxLength: 500
      },
      summary: {
        type: String,
        required: false,
        maxLength: 100
      }
    }]
  },
  certificates: {
    required: false,
    type: [{
      licenseNum: {
        type: String,
        required: false,
        maxLength: 200
      },
      name: {
        type:String,
        required: true,
        maxLength: 100
      }
    }]
  },
  other: {
    type: String,
    required: false,
    maxLength: 500
  },
  dateCreated: { type: Date, default: Date.now },
  ifResumePublic: { type: Boolean, default: false },
});

const ResumeModel = mongoose.model('resume', resumeSchema);

module.exports = { ResumeModel };
