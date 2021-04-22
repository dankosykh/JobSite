const router = require('express').Router();
const { employerNote } = require('../../database/controller');

//  -> /api/employerdata ->

//_____________________New User
router.post('/newemployer', (req, res, next) => {
  if (!req.body.email) {
    res.sendStatus(400);
  } else {
    let { email } = req.body;
    employerNote.createEmployerNoteModel({ email })
      .then(result => {
        res.status(201).send({
          employerId: result._id,
          status: 'OK'
        });
      })
      .catch(err => res.send(403));
  }
});

router.get('/id', (req, res, next) => {
  let { email } = req.query;
  if (!email) {
    res.sendStatus(422);
  } else {
    employerNote.getId(email)
      .then(result => {
        res.status(200).send({
          status: 'OK',
          employerNoteId: result._id
        });
      })
      .catch(err => res.status(404).send(err));
  }
});

// ________________find all notes
router.get('/note/all', (req, res, next) => {
  let { employerId } = req.query;
  employerNote.findAllNotes({ employerId })
    .then(result => {
      res.status(200).send({
        status: 'OK',
        notes: result
      });
    })
    .catch(err => res.status(404).send(err));
});

router.post('/note', (req, res, next) => {
  let { employerId, noteObj } = req.body;
  employerNote.addNote(employerId, noteObj)
    .then(result => {
      res.status(202).send({
        status: 'OK',
        notes: result
      });
    })
    .catch(err => res.status(500).send(err));
});

// ________________update a note
router.patch('/note', (req, res, next) => {
  let { employerId, noteId, updatedFields } = req.body;
  employerNote.updateNote(employerId, noteId, updatedFields)
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
  let { employerId, noteId } = req.body;
  employerNote.deleteNote(employerId, noteId)
    .then(result => res.sendStatus(204))
    .catch(err => res.sendStatus(403));
});

module.exports = router;
