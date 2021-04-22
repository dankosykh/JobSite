const mongoose = require('mongoose');
const JobListingModel = require('../model/jobListingModel.js');
const { createModel, regexCreate } = require('./reuse.js');

const listing = {

  createOne:(params) => createModel(JobListingModel, params),

  searchListings: (criteria) => {
      let search = regexCreate(criteria);
      return JobListingModel.find({
        $or: [
          {'jobDescription': {$regex: search, $options: 'i'}},
          {'requirements': {$regex: search, $options: 'i'}},
          {'experienceLevel': {$regex: search, $options: 'i'}},
          {'industry': {$regex: search, $options: 'i'}},
          {'company': {$regex: search, $options: 'i'}},
          {'title': {$regex: search, $options: 'i'}}
        ]
      })
        .exec();
  },

  searchListingsPerCandidate: (criteriaArray) => {
    var objectIds = [];
    for (let id of criteriaArray) {
      objectIds.push(mongoose.Types.ObjectId(id));
    }
    return JobListingModel.find({ '_id': { $in: objectIds} }).exec();
  },

  updateOne: (jobListingId, update) => JobListingModel.updateOne({_id: jobListingId}, update),

  findOne: (jobListingId) => JobListingModel.findOne({_id: jobListingId}),

  deleteOne: (jobListingId) => JobListingModel.deleteOne({_id: jobListingId}),

  getAll: () => JobListingModel.find({}),

  findAllByEmployer: (employerId) => {
    let options = employerId ? {employerId: employerId} : {};
    return JobListingModel.find(options);
  },

  findAllByFilter: (params) => JobListingModel.find(params),

  addApplicant: (jobListingId, applicantId) => JobListingModel.findOneAndUpdate({_id: jobListingId}, {$addToSet: {seekerIds: [applicantId]}})
}

module.exports = listing;