const mongoose = require('mongoose');
const { createModel, regexCreate } = require('./reuse.js');
const { ResumeModel } = require('../model/resumeModel.js');

const resume = {

  createOne: (params) => createModel(ResumeModel, params),

  searchResumes: (criteria) => {
      let search = regexCreate(criteria);
      return ResumeModel.find({
        $or: [
          {'workExperience.title': {$regex: search, $options: 'i'}},
          {'workExperience.description': {$regex: search, $options: 'i'}},
          {'workExperience.summary': {$regex: search, $options: 'i'}}
        ]
      })
        .exec()
  },

  searchResumesPerListing: (criteriaArray) =>
    ResumeModel
      .find({ '_id': { $in: criteriaArray} })
      .exec(),

  findOne: (seekerId) => ResumeModel.find({seekerId: seekerId}),

  deleteOne: (id) => ResumeModel.deleteOne({_id: id}),

  updateOne: (resumeUpdates) => ResumeModel.updateOne(resumeUpdates),

  findAll: () => ResumeModel.find({}),

  findAllByFilter: (params) => ResumeModel.find(params),
}

module.exports = resume;