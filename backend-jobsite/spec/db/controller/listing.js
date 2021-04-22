const mongoose = require('mongoose');
const listing = require('../../../database/controller/listing.js');

let testData =  {
  "employerId": "606d288db9fe4c4ece49270c",
  "company": "HigherEd.com",
  "industry": "Online Education",
  "datePosted": "2021-02-28",
  "title": "Frontend Engineer",
  "employmentType": "fulltime",
  "workLocationType": "onsite",
  "zipcode": "91403",
  "city": "San Francisco",
  "experienceLevel": "mid",
  "requirements": ["2-4 years of qa training", "navigating reddit"],
  "benefits": ["401k"],
  "salary": "100000",
  "jobDescription": "Porta non pulvinar neque laoreet suspendisse. Pellentesque sit amet porttitor eget dolor morbi non arcu risus. Enim eu turpis egestas pretium aenean. Massa eget egestas purus viverra accumsan. Elit duis tristique sollicitudin nibh sit amet commodo.",
  "companyDescription": "Bibendum est ultricies integer quis auctor elit sed vulputate. Blandit cursus risus at ultrices mi."
};

let newListing = () => listing.createOne(testData).then(res => console.log(res));
newListing();

