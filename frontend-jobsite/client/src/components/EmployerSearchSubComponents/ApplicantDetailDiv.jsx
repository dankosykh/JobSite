import React from 'react';
import styled from 'styled-components';

import Work from './Work.jsx';
import Education from './Education.jsx';
import Certification from './Certification.jsx';
import schema from '../constants.jsx';

const ApplicantDetailWrapper = styled.div`
  width: 62%;
  height: 97%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background: #FFF;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  box-shadow: 0 3px 10px rgba(0,0,0,0.16), 0 3px 10px rgba(0,0,0,0.23);
  font-family: Arial, sans-serif;
  color: #424242;
`;

const ApplicantResume = styled.div`
  height: 95%;
  width: 98%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: solid 1px #e0e0e0;
  border-radius: 10px;
  background: #ffffff;
`;

const Header = styled.div`
  width: 100%;
  margin-top: 2vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Name = styled.h1`
  margin: .5vh 0 .25vh 0;
  color: ${schema.primary};
  font-size: 1.5rem;
  font-weight: bold;
`;

const Summary = styled.p`
  margin: 0;
  font-weight: lighter;
  font-style: italic;
`;

const ContactInfo = styled.div`
  width: 95%;
  margin-top: 1vh;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const Link = styled.a`
  margin: 0 .5vw;
  color: inherit;
  font-size: 1rem;
  text-decoration: none;
`;

const SectionTitle = styled.h2`
  font-size: 1rem;
  font-weight: bold;
  color: ${schema.secondary};
`;

const Section = styled.div`
  width: 95%;
  margin-top: .5vh;
  display: flex;
  flex-direction: column;
  // justify-content: space-evenly;
`;

const ApplicantDetailDiv = ({ resumeToDisplay }) => (
  <ApplicantDetailWrapper>
    {!resumeToDisplay && <div>Select an applicant to view their resume</div>}
    {resumeToDisplay && (
      <ApplicantResume>
        <Header>
          <Name>{`${resumeToDisplay.firstName} ${resumeToDisplay.lastName}`}</Name>
          <Summary>Javascript | React | Node</Summary>
          <ContactInfo>
            <Link href={resumeToDisplay.email}>{resumeToDisplay.email}</Link>
            {Object.entries(resumeToDisplay.links).map(([key, value]) => (
              <Link key={key} href={value}>{value}</Link>
            ))}
          </ContactInfo>
        </Header>
        <Section>
          <SectionTitle>Experience</SectionTitle>
          {resumeToDisplay.workExperience.reverse().map((job) => (
            <Work key={job.startDate} job={job} />
          ))}
        </Section>
        <Section>
          <SectionTitle>Education</SectionTitle>
          {resumeToDisplay.education.reverse().map((degree) => (
            <Education key={degree.yearGraduated} degree={degree} />
          ))}
        </Section>
        {resumeToDisplay.certificates.length !== 0
        && (
        <Section>
          <SectionTitle>Certifications</SectionTitle>
          {resumeToDisplay.certificates.map((certificate) => (
            <Certification key={certificate.licenseNum} certificate={certificate} />
          ))}
        </Section>
        )}
      </ApplicantResume>
    )}
  </ApplicantDetailWrapper>
);

export default ApplicantDetailDiv;
