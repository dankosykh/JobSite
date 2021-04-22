const mongoose = require('mongoose');
const employerUserSchema = require('../../../database/model/employerUserModel.js')

const employer = mongoose.model('resume', employerUserSchema);

// var test = {
//   firstName: "Job",
//   lastName: "Burley",
//   email: "afhm@lol.com",
//   company: "google",
//   notes: [{
//     title: 'About the interview',
//     category: 'candidate',
//     body: 'good one'
//   }],
// }




employer.create(test)
.then((res) => console.log(`Joe insert complete ${res}`))
.catch((err) => console.log(err));

// employer.find({_id: '6068b58447618a5d91817d24'})
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));
