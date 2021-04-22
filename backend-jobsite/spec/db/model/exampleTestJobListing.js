const mongoose = require("mongoose");
const jobListingModel = require("../../../database/model/jobListingModel.js");


var test = {

}

test2 = {
  "employerId": "6068b58447618a5d91817d24",
  "company": "HigherEd.com",
  "industry": "Online Education",
  "datePosted": "2021-02-28",
  "title": "Frontend Engineer",
  "employmentType": "fulltime",
  "workLocationType": "onsite",
  "zipcode": "91403",
  "city": "SF",
  "experienceLevel": "mid",
  "requirements": ["2-4 years of qa training", "navigating reddit"],
  "benefits": ["401k"],
  "salary": "100000",
  "jobDescription": "Porta non pulvinar neque laoreet suspendisse. Pellentesque sit amet porttitor eget dolor morbi non arcu risus. Enim eu turpis egestas pretium aenean. Massa eget egestas purus viverra accumsan. Elit duis tristique sollicitudin nibh sit amet commodo. Sit amet mattis vulputate enim nulla aliquet porttitor. Mauris sit amet massa vitae tortor condimentum lacinia quis vel. Enim neque volutpat ac tincidunt vitae.",
  "companyDescription": "Bibendum est ultricies integer quis auctor elit sed vulputate. Blandit cursus risus at ultrices mi."
}

//jobListingModel.create(test2)
//.then(res => console.log(`job lised in db:  ${res}`))
//.catch((err) => console.log(err));

jobListingModel.find({})
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
