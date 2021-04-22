const router = require('express').Router();
const resume = require('../../database/controller/resume.js');

// router -> /api/resume ->

// get all resumes
router.get('/all', (req, res, next) => {
  if (!req.body.filters) {
    resume.findAll()
      .then(result => res.json(result))
      .catch(err => res.status(500).send(err));
  } else {
    resume.findAllByFilter(req.body)
      .then(result => res.json(result))
      .catch(err => res.status(500).send(err));
  };
});

// get all resumes that have applied for a listing
router.get('/applied', (req, res, next) => {
  resume.searchResumesPerListing(req.body)
    .then(result => res.json(result))
    .catch(err => res.status(500).send(err));
});

router.get('/search', (req, res, next) => {
  resume.searchResumes(req.query.search)
    .then(response => res.json(response))
    .catch(err => res.sendStatus(404))
});

router.get('/', (req, res, next) => {
  if (!req.query.id) {
    res.sendStatus(422);
  } else {
    resume.findOne(req.query.id)
      .then(response => res.json(response))
      .catch(err => res.status(404).send(err));
  };
});

// Post a resume
router.post('/', (req, res, next) => {
  if (!req.body.seekerId) {
    res.sendStatus(422);
  } else {
    resume.createOne(req.body)
      .then(response => res.json(response))
      .catch(err => res.status(404).send(err));
  };
});

// Update a resume
router.put('/', (req, res, next) => {
  if (!req.body.seekerId) {
    res.sendStatus(422);
  } else {
    resume.updateOne(req.body)
      .then(result => res.json(result))
      .catch(err => res.sendStatus(404))
  };
});

router.delete('/', (req, res, next) => {
  if (!req.query.id) {
    res.sendStatus(422);
  } else {
    resume.deleteOne(req.query.id)
      .then(response => res.json(response))
      .catch(err => res.sendStatus(404))
  };
});

module.exports = router;
