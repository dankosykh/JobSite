const DummyData = {
  status: 200,
  statusText: 'OK',
  headers: {},
  config: {},
  request: {},
  data: [{
    firstName: 'Renado',
    lastName: 'Dominguez',
    email: 'rdominguez0@admin.ch',
    phone: '884-936-4577',
    links: {
      linkedin: 'https://yahoo.com',
      personal: 'https://www.npmjs.com/package/mysql',
    },
    city: 'Doctor Juan León Mallorquín',
    zipcode: '7092192',
    education: [
      {
        institution: 'University of Miami',
        degreeType: 'Bachelors',
        fieldOfStudy: 'physics',
        yearGraduated: '2011',
      },
      {
        institution: 'University of Miami',
        degreeType: 'Masters',
        fieldOfStudy: 'mathematics',
        yearGraduated: '2013',
      },
    ],
    workExperience: [
      {
        employer: 'Verizon',
        title: 'Field Tech',
        startDate: '2012-03-14',
        endDate: '2014-02-09',
        description: 'Handled Line cutting and other tech work',
      },
      {
        employer: 'T-Mobile',
        title: 'Installation Tech',
        startDate: '2014-07-13',
        endDate: '2018-02-10',
        description: 'Tempus urna et pharetra pharetra massa. Proin libero nunc consequat interdum varius sit amet mattis vulputate. Fermentum leo vel orci porta non. Eu consequat ac felis donec et odio pellentesque diam.',
      },
    ],
    certificates: [
      {
        licenseNum: '1005240832c',
        name: 'Azure Database Training',
      },
    ],
  },
  {
    firstName: 'Jacob',
    lastName: 'Peterson',
    email: 'hackreactor@alumni.com',
    phone: '555-867-5309',
    links: {
      linkedin: 'linkedin.com/in/jacobwpeterson',
      personal: 'github.com/JacobWPeterson',
    },
    city: 'Sunnyvale',
    zipcode: '94086',
    education: [
      {
        institution: 'University of Edinburgh',
        degreeType: 'PhD',
        fieldOfStudy: 'Textual Criticism',
        yearGraduated: '2020',
      },
      {
        institution: 'Hack Reactor',
        degreeType: 'other',
        fieldOfStudy: 'Software Engineering',
        yearGraduated: '2021',
      },
    ],
    workExperience: [
      {
        employer: 'Verizon',
        title: 'Field Tech',
        startDate: '2012-03-14',
        endDate: '2014-02-09',
        description: 'Handled Line cutting and other tech work',
      },
      {
        employer: 'T-Mobile',
        title: 'Installation Tech',
        startDate: '2014-07-13',
        endDate: '2018-02-10',
        description: 'Tempus urna et pharetra pharetra massa. Proin libero nunc consequat interdum varius sit amet mattis vulputate. Fermentum leo vel orci porta non. Eu consequat ac felis donec et odio pellentesque diam.',
      },
      {
        employer: 'CSNTM',
        title: 'Research Fellow',
        startDate: '2011-05-20',
        endDate: '2019-10-31',
        description: 'Led digitization projects in the US, Europe, and Asia. \r Oversaw the planning and initial development of new user and research features for the website \r Established better practices for public access to our online collection, our data storage, and our adherence to international standards (ISO & FADGI) \r Promoted, from intern to project lead and ultimately to research fellow.'
        ,
      },
    ],
    certificates: [],
  }],
};

module.exports.DummyData = DummyData;
