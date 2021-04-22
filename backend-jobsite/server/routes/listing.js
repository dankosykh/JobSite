const router = require('express').Router();
const listing = require('../../database/controller/listing.js');
const seeker = require('../../database/controller/seeker.js');
// router -> /api/listing ->


// get all listings
router.get('/all', (req, res, next) => {
  if (!req.body.filters) {
    listing.getAll()
      .then(result => res.json(result))
      .catch(err => res.status(500).send(err));
  } else {
    listing.findAllByFilter(req.body)
      .then(result => res.json(result))
      .catch(err => res.status(500).send(err));
  };
});

// get searched listings
router.get('/search', (req, res, next) => {
  listing.searchListings(req.query.search)
    .then(response => res.json(response))
    .catch(err => res.sendStatus(404))
});

//get job data from array of ids
router.post('/savedlistings', (req, res, next) => {
  listing.searchListingsPerCandidate(req.body.data)
    .then(result => res.json(result))
    .catch(err => res.status(500).send(err));
});

router.get('/', (req, res, next) => {
  if (!req.query.id) {
    res.sendStatus(422);
  } else {
    listing.findOne(req.query.id)
      .then(result => res.json(result))
      .catch(err => res.sendStatus(404));
  }
});

// get employer listings
router.get('/employer', (req, res, next) => {
  const { employerId } = req.query;
  if (!employerId) {
   res.sendStatus(404);
  } else {
   listing.findAllByEmployer(employerId)
     .then(result => res.json(result))
     .catch(err => res.status(500).send(err))
  };
});

// post listing
router.post('/', (req, res, next) => {
  if (!req.body.employerId) {
    res.sendStatus(422);
  } else {
    listing.createOne(req.body)
      .then(response => {
        res.status(204).send({
          status: 'OK'
        });
      })
      .catch(err => res.status(404).send(err))
  };
});

// update a job listing
router.put('/', (req, res, next) => {
  if (!req.body.id) {
    res.sendStatus(422);
  } else {
    listing.updateOne(req.body)
      .then(result => res.json(result))
      .catch(err => res.sendStatus(404));
  };
});

// app.delete('/api/listing', deleteListing);
router.delete('/', (req, res, next) => {
  if (!req.query.id) {
    res.sendStatus(422);
  } else {
    listing.deleteOne(req.query.id)
      .then(result => res.status(204).send({ status: 'OK' }))
      .catch(err => res.status(404).send(err));
  };
});


//add seeker to a listing and a job listing to a seeker
router.patch('/apply', (req, res, next) => {
  const {seekerId, applicationObj} = req.body;
  if (!seekerId || !applicationObj) {
    res.sendStatus(422);
  } else {
    listing.addApplicant(applicationObj.jobListingId, seekerId)
      .then((result) => {
       return seeker.addApplication(seekerId, applicationObj)
      })
      .then((response) => {
        res.status(201).send({
          applicationId: response.id,
          status: 'OK'
      });
    })
    .catch(err => res.sendStatus(404))
  };
});


module.exports = router;
