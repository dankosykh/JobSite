const mongoose = require('mongoose');
const seeker = require('../../../database/model/seekerUserModel.js')

// const seeker = mongoose.model('resume', seekerUserSchema);

var test = {
  firstName: "Bob",
  lastName: "Hurley",
  email: "hhm@lol.com",
  zipcode: "14592",
  city: 'SF',
  appointments: [
    {
      startTime: new Date(),
      endTime: new Date(),
      category: 'interview',
      title: 'my interview',
      appointmentNote: 'I am really nervous for this one',

    }
  ],
  notes: [{
    title: 'About the interview',
    category: 'listing',
    body: 'remember to turn on camera'
  }],

  applications: [{
    jobListingId: '20',
    status: 'started'
  }],

  savedJobs: [{
    jobListingId: '20',
    interestLevel: '2'
  }]
}


seeker.create(test)
.then(() => console.log('test seeker insert complete'))
.catch((err) => console.log(err));

seeker.find({})
.then((res) => console.log(res))
.catch((err) => console.log(err));



