const mongoose = require('mongoose');
const escapeStringRegexp = require('escape-string-regexp');

const regexCreate = (string) => {
  let escapedRegex = escapeStringRegexp(string);
  return new RegExp(escapedRegex);
};

const createModel = (model, params) => {
  var newModel = new model(params);
  return newModel.save();
};

const addSubdocumentToModel = (mainModel, mainId, addChildModel, childAttributeKey, childObj, resolve, reject) => {
  mainModel.findOne({ _id: mainId }, (err, result) => {
    let currentMain = result;
    let newChild = new addChildModel(childObj);
    currentMain[childAttributeKey].push(newChild);
    currentMain.save((err, writtenChild) => {
      if (err) { reject(err) };
      resolve(writtenChild);
    });
  });
};

const deleteSubdocument = (mainModel, mainId, childAttributeKey, childId, resolve, reject) => {
  mainModel.findOne({ _id: mainId }, (err, result) => {
    let currentMain = result;
    currentMain[childAttributeKey].pull({ _id: childId });
    currentMain.save((err, response) => {
      if (err) { reject(err) };
      resolve(response);
    });
  });
};

const updateSubdocument = (mainModel, mainId, childAttributeKey, childId, updatedFields, resolve, reject) => {
  mainModel.findOne({ _id: mainId }, (err, result) => {
    let currentMain = result;
    for (let field in updatedFields) {
      currentMain[childAttributeKey].id(childId)[field] = updatedFields[field];
    }
    currentMain.save((err, response) => {
      if (err) { reject(err) };
      resolve(response);
    });
  });
};

const filterSubdocument = (mainModel, mainId, childAttributeKey, params, resolve, reject) => {
  let target = Object.keys(params)[0];
  let targetValue = Object.values(params)[0];
  mainModel.aggregate([
    { $match: { _id: new mongoose.Types.ObjectId(mainId) }},
    { $unwind: `$${childAttributeKey}` },
    { $match: { [ `${childAttributeKey}.${target}` ]: targetValue } }
  ])
    .exec((err, result) => {
      if (err) { reject(err) };
      resolve(result);
  });
};

const findAllInSubdocument = (mainModel, mainId, childAttributeKey, resolve, reject) => {
  mainModel.findOne({ _id: mainId}, (err, result) => {
    let currentMain = result;
    if (err) { reject(err) };
    resolve(currentMain[childAttributeKey]);
  });
};

const findInDb = (mainModel, params) => mainModel.find(params);

module.exports = {
  regexCreate,
  createModel,
  addSubdocumentToModel,
  deleteSubdocument,
  updateSubdocument,
  filterSubdocument,
  findAllInSubdocument,
  findInDb,
};
