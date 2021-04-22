const mongoose = require('mongoose');
const resumeModel = require('../../../database/model/resumeModel.js');
// const resumeModel = mongoose.model('resume', resumeSchema);

// var test = {
//   firstName: "Bob",
//   lastName: "Hurley",
//   email: "hhm@lol.com",
//   phone: "143-241-9863",
//   links: {
//     linkedIn: "linkedin.com/bob"
//   },
//   zipcode: "14592",
//   education: {
//     institution: "UC Davis",
//     yearGraduated: "2016",
//     degree: "agricultural studies",
//   },
//   workExperience: {
//     employer: 'Pizza hut',
//       title: 'big mac engineer',
//       startDate: '2000-04',
//       endDate: '2021-03',
//       description: 'workd at micky ds'
//   },
//   certificates: { name: 'Solidworks', licenseNum: 234523453 },
//   other: 'Other otherthertherthertherther  therther therther'
// }

var test  = {
  "seekerId":"606b580185bfed0c291b97e4",
  "firstName":"Renado",
  "lastName":"Dominguez",
  "email":"rdominguez0@admin.ch",
  "phone":"884-936-4577",
  "links": {
    "linkedin":"https://yahoo.com",
    "personal":"https://www.npmjs.com/package/mysql"
  },
  "city":"Doctor Juan León Mallorquín",
  "zipcode":"70921",
  "education": [
    {
      "institution": "University of Miami",
      "degreeType": "Diploma",
      "fieldOfStudy": "physics",
      "yearGraduated": "2011"
    },
    {
      "institution": "University of Miami",
      "degreeType": "other",
      "fieldOfStudy": "mathematics",
      "yearGraduated": "2013"
    }
  ],
  "workExperience": [
      {
        "employer": "Verizon",
        "title": "Field Tech",
         "startDate": "2012-03-14",
         "endDate": "2014-02-09",
         "description": "Handled Line cutting and other tech work"
    },
    {
      "employer": "T-Mobile",
      "title": "Field Tech",
      "startDate": "2014-07-13",
      "endDate": "2018-02-10",
      "description": "Tempus urna et pharetra pharetra massa. Proin libero nunc consequat interdum varius sit amet mattis vulputate. Fermentum leo vel orci porta non. Eu consequat ac felis donec et odio pellentesque diam."
    }
  ],
  "certificates": [
    {
      "licenseNum": "1005240832c",
      "name": "Azure Database Training"
    }
  ]
};



resumeModel.create(test)
  .then(() => console.log('test resume insert complete'))
  .catch((err) => console.log(err));


// resumeModel.find({})
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));
