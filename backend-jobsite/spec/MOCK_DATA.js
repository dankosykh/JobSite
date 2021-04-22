const test1 = {"firstName":"Renado","lastName":"Dominguez","email":"rdominguez0@admin.ch","phone":"884-936-4577","links":[{"linkedin":"https://yahoo.com"}],"city":"Doctor Juan León Mallorquín","zipcode":"7092192"};

const test2 = {"firstName":"Bobbie","lastName":"Grundle","email":"bgrundle1@baidu.com","phone":"902-790-5748","links":[],"city":"Trelleborg","zipcode":"92524691"}

const test3 ={"firstName":"Roxine","lastName":"Ranaghan","email":"rranaghan2@chron.com","phone":"756-111-5242","links":[],"city":"Santo Anastácio","zipcode":"71561420"}

const test4 ={"firstName":"Poppy","lastName":"Murcutt","email":"pmurcutt3@mapquest.com","phone":"249-130-8159","links":[],"city":"Kristinehamn","zipcode":"69235210"}

const listing1={"employerId":"606b48c4c9996e0955ab98dd", "company":"Verizon","industry":"Telecom","datePosted": new Date(),"title":"Technician","employmentType":"contract","workLocationType":"onsite","zipcode":"92502","city":"Los Altos","experienceLevel":"entry":,"requirements":"Starts tomorrow","benefits":"401k","salary":"41000","jobDescription":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt eget nullam non nisi. Velit aliquet sagittis id consectetur. Dignissim suspendisse in est ante in nibh mauris cursus. Donec et odio pellentesque diam volutpat commodo sed egestas egestas. Praesent semper feugiat nibh sed pulvinar proin gravida hendrerit lectus. Posuere ac ut consequat semper viverra. Tortor at risus viverra adipiscing. Dolor morbi non arcu risus. Dui ut ornare lectus sit amet. Faucibus nisl tincidunt eget nullam non nisi est.","companyDescription":"Risus nec feugiat in fermentum. Molestie nunc non blandit massa enim nec dui. Tristique senectus et netus et."}

const listing2={"employerId":, "company":"Logjam","industry":"Shipping","datePosted":new Date(),"title":"Wood Cutter","employmentType":"contract","workLocationType":"remote","zipcode":"19523","city":"Waukanee","experienceLevel":"mid","requirements":"Saws","benefits":"fire wood","salary":"60000","jobDescription":"Nullam eget felis eget nunc lobortis mattis. Sit amet mattis vulputate enim nulla aliquet porttitor. Mattis rhoncus urna neque viverra justo nec ultrices dui. Auctor urna nunc id cursus metus aliquam eleifend mi in. Dui vivamus arcu felis bibendum ut tristique et. In massa tempor nec feugiat nisl. Quam lacus suspendisse faucibus interdum posuere lorem. Neque aliquam vestibulum morbi blandit. Ac ut consequat semper viverra nam libero justo laoreet sit. Nibh venenatis cras sed felis eget velit aliquet sagittis id. Pellentesque habitant morbi tristique senectus et netus et.","companyDescription":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "}

const listing3={"employerId":, "company":"GermanyAir","industry":"Travel","datePosted":new Date(),"title":"Flight Attendant2","employmentType":"fulltime","workLocationType":"onsite","zipcode":"50314","city":"Munich","experienceLevel":"senior","requirements":"prior job experience","benefits":"Full Dental, Medical","salary":"71000","jobDescription":"Diam donec adipiscing tristique risus. Etiam sit amet nisl purus. Elit ullamcorper dignissim cras tincidunt lobortis feugiat. Parturient montes nascetur ridiculus mus mauris vitae. Augue interdum velit euismod in pellentesque massa placerat duis. Nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum. Rutrum tellus pellentesque eu tincidunt tortor. Aenean pharetra magna ac placerat vestibulum lectus mauris. Nulla aliquet porttitor lacus luctus accumsan tortor posuere.","companyDescription":"Tempus urna et pharetra pharetra massa. Proin libero nunc consequat interdum varius sit amet mattis vulputate."}

const listing4={"employerId":, "company":,"industry:","datePosted":,"title":,"employmentType":,"workLocationType":,"zipcode":,"city":,"experienceLevel":,"requirements":,"benefits":,"salary":,"jobDescription":,"companyDescription":}

const listing5={"employerId":, "company":,"industry:","datePosted":,"title":,"employmentType":,"workLocationType":,"zipcode":,"city":,"experienceLevel":,"requirements":,"benefits":,"salary":,"jobDescription":,"companyDescription":}

const listing1={"employerId":, "company":,"industry:","datePosted":,"title":,"employmentType":,"workLocationType":,"zipcode":,"city":,"experienceLevel":,"requirements":,"benefits":,"salary":,"jobDescription":,"companyDescription":}
module.exports = { test1, test2, test3, test4 };


//Jacob needs two resume input examples inc 2 education and 2 work and functioning link
//added degree enum. Need field of study. Can we sum experience in years on backend - num of years in the workforce.
//

//jacob resp for resume:
{
  "status": 200,
  "statusText": "OK",
  "headers": {},
  "config": {},
  "request": {},
  "data": [{
    "firstName":"Renado",
    "lastName":"Dominguez",
    "email":"rdominguez0@admin.ch",
    "phone":"884-936-4577",
    "links": {
      "linkedin":"https://yahoo.com",
      "personal":"https://www.npmjs.com/package/mysql"
    },
    "city":"Doctor Juan León Mallorquín",
    "zipcode":"7092192",
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
  }]
}

[{
  "firstName":"Renado",
  "lastName":"Dominguez",
  "email":"rdominguez0@admin.ch",
  "phone":"884-936-4577",
  "links": {
    "linkedin":"https://yahoo.com",
    "personal":"https://www.npmjs.com/package/mysql"
  },
  "city":"Doctor Juan León Mallorquín",
  "zipcode":"7092192",
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
  ]
  "certificates": [
    {
      "licenseNum": "1005240832c",
      "name": "Azure Database Training"
    }
  ]
}];
