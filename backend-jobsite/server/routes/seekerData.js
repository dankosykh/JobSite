const router = require('express').Router();
const { seeker, resume } = require('../../database/controller');

//       /api/seekerdata

// __________Unspecified New User
router.post('/newseeker', (req, res, next) => {
  let { email } = req.body;
  seeker.createSeekerModel({ email })
    .then(result => {
      res.status(201).send({
        seekerId: result._id,
        status: 'OK'
      });
    })
    .catch(err => res.sendStatus(403));
});

//___get seekerId from email

router.get('/all', (req, res, next) => {
  let { seekerId } = req.query;
  var objToSend;
  seeker.getAllData(seekerId)
    .then(result => {
      objToSend = result;
      return resume.findOne(seekerId);
    })
    .then(response => {
      res.status(200).send({
        status: 'OK',
        data: objToSend,
        resume: response[0]
      });
    })
    .catch(err => res.status(404).send(err));
})


router.get('/id', (req, res, next) => {
  let { email } = req.query;
  seeker.getId(email)
    .then(result => {
      res.status(200).send({
        status: 'OK',
        seekerId: result._id
      });
    })
    .catch(err => res.status(404).send(err));
});

// ____Notes________________________________

// ______________add new note
router.post('/note', (req, res, next) => {
  let { seekerId, noteObj } = req.body;
  seeker.addNote(seekerId, noteObj)
    .then((result) => {
      res.status(201).send({
        status: 'OK',
        notes: result.notes
      });
    })
    .catch(err => res.sendStatus(403));
});


// ________________find all notes
router.get('/note/all', (req, res, next) => {
  let { seekerId } = req.body;
  seeker.findAllNotes({ seekerId })
    .then(result => {
      res.status(200).send({
        status: 'OK',
        notes: result
      });
    })
    .catch(err => res.status(404).send(err));
});

// ________________update a note
router.patch('/note', (req, res, next) => {
  let { seekerId, noteId, updatedFields } = req.body;
  seeker.updateNote(seekerId, noteId, updatedFields)
    .then(result => {
      res.status(202).send({
        status: 'OK',
        notes: result.notes
      });
    })
    .catch(err => res.status(400).send(err));
});

// ________________delete a note
router.delete('/note', (req, res, next) => {
  let { seekerId, noteId } = req.body;
  seeker.deleteNote(seekerId, noteId)
    .then(result => {
      res.sendStatus(204)
    })
    .catch(err => res.sendStatus(403));
});

// __ Appointments____________________________________

// ________________find all appointments
router.get('/appointment/all', (req, res, next) => {
  let { seekerId } = req.body;
  seeker.findAllAppointments({ seekerId })
    .then(result => {
      res.status(200).send({
        status: 'OK',
        appointments: result
      });
    })
    .catch(err => res.status(404).send(err));
});

// ________________add new appointment
router.post('/appointment', (req, res, next) => {
  let {seekerId, appointmentObj} = req.body;
  seeker.addAppointment(seekerId, appointmentObj)
    .then(result => {
      res.status(200).send({
        status: 'OK',
        appointments: result.appointments
      });
    })
    .catch(err => res.status(403).send(err));
});

// UNTESTED
// ________________edit an appointment
router.patch('/appointment', (req, res, next) => {
  let { seekerId, appointmentId, updatedFields } = req.body;
  seeker.updateAppointment(seekerId, appointmentId, updatedFields)
    .then(result => {
      res.status(202).send({
        status: 'OK',
        appointments: result.appointments
      });
    })
  .catch(err => res.status(400).send(err));
});

// ________________delete an appointment
router.delete('/appointment', (req, res, next) => {
  let {seekerId, appointmentId} = req.body;
  seeker.deleteAppointment(seekerId, appointmentId)
    .then(result => {
      res.sendStatus(204)
    })
    .catch(err => res.sendStatus(403));
});

// __ Applications____________________________________

// ________________add new application
router.post('/application', (req, res, next) => {
  let { seekerId, applicationObj } = req.body;
  seeker.addApplication(seekerId, applicationObj)
    .then((result) => {
      res.status(201).send({
          applicationId: result.id,
          status: 'OK'
        });
    })
    .catch(err => res.status(403).send(err));
});

// ________________get all applications
router.get('/application/all', (req, res, next) => {
  let { seekerId } = req.body;
  seeker.findAllApplications(seekerId)
    .then(result => {
      res.status(200).send({
        status: 'OK',
        appointments: result.appointments
      });
    })
    .catch(err => res.status(404).send(err));
});


// ________________update application
router.patch('/application', (req, res, next) => {
  let { seekerId, applicationId, updatedFields } = req.body;
  seeker.updateApplication(seekerId, applicationId, updatedFields)
    .then(result => {
      res.status(202).send({
        status: 'OK',
        applications: result.applications
      });
    })
  .catch(err => res.status(400).send(err));
});

// ________________delete application
router.delete('/application', (req, res, next) => {
  let { seekerId, applicationId } = req.body;
  seeker.deleteApplication(seekerId, applicationId)
    .then(result => res.sendStatus(204))
    .catch(err => res.sendStatus(403));
});

// __Saved jobs____________________________________

//______________save a job
router.post('/savedjob', (req, res, next) => {
  let { seekerId, savedJobsObj } = req.body;
  seeker.addSavedJob(seekerId, savedJobsObj)
    .then(result => {
      res.status(201).send({
          savedJobId: result._id,
          status: 'OK'
        });
    })
    .catch(err => res.status(403).send(err));
});

// _____________get all saved jobs
router.get('/savedjob/all', (req, res, next) => {
  let { seekerId } = req.body;
  seeker.findAllSavedJobs({ seekerId })
    .then(result => {
      res.status(200).send({
        status: 'OK',
        savedJobs: result
      });
    })
    .catch(err => res.status(404).send(err));
});


// _____________update saved job
router.patch('/savedjob', (req, res, next) => {
  let { seekerId, savedJobId, updatedFields } = req.body;
  seeker.updateSavedJob(seekerId, savedJobId, updatedFields)
    .then(result => {
      res.status(202).send({
        status: 'OK',
        savedJobs: result.savedJobs
      });
    })
  .catch(err => res.status(400).send(err));
});


// _____________delete saved job
router.delete('/savedjob', (req, res, next) => {
  let { seekerId, savedJobId } = req.body;
  seeker.deleteSavedJob(seekerId, savedJobId)
    .then(result => res.sendStatus(204))
    .catch(err => res.sendStatus(403));
});

module.exports= router;