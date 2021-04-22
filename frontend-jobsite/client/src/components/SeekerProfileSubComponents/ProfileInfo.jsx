import React from 'react';
import styled from 'styled-components';
import schema from '../constants.jsx';
import Education from './Education.jsx';

const ProfileInfoWrapper = styled.div`
  border: 1px solid #e0e0e0;
  width: 95%;
  height: 50vh;
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

const Text = styled.p`
  margin: 0;
  font-weight: lighter;
`;

const ItalicText = styled.p`
  margin: 0;
  font-weight: lighter;
  font-style: italic;
`;

const ContactInfo = styled.div`
  width: 95%;
  margin-top: 1vh;
  line-height: 1.5rem;
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

const SpacedRowDiv = styled.div`
  margin: 0 1vw 0 2vw;
  display: flex;
  justify-content: space-between;
`;

const Section = styled.div`
  width: 95%;
  margin-top: .5vh;
  display: flex;
  flex-direction: column;
  // justify-content: space-evenly;
`;

const SectionTitle = styled.h2`
  font-size: 1rem;
  font-weight: bold;
  color: ${schema.secondary};
`;

const ProfileInfo = ({ resume }) => (
  <ProfileInfoWrapper>
    <Name>{`${resume.firstName} ${resume.lastName}`}</Name>
    <Text>{resume.city}</Text>
    <Text>{resume.phone}</Text>
    <ContactInfo>
      <Link href={resume.email}>{resume.email}</Link>
      {Object.entries(resume.links).map(([key, value]) => (
        <Link key={key} href={value}>{value}</Link>
      ))}
    </ContactInfo>
    <Section>
      <SectionTitle>Experience</SectionTitle>
      {resume.workExperience.reverse().map((job) => (
        <SpacedRowDiv key={job.endDate}>
          <Text>{`${job.title} @ ${job.employer}`}</Text>
          <ItalicText>{`${job.startDate.slice(0, 4)} – ${job.endDate.slice(0, 4)}`}</ItalicText>
        </SpacedRowDiv>
      ))}
    </Section>
    <Section>
      <SectionTitle>Education</SectionTitle>
      {resume.education.reverse().map((degree) => (
        <Education key={degree.yearGraduated} degree={degree} />
      ))}
    </Section>
    <Section>
      <SectionTitle>Certifications</SectionTitle>
      {resume.certificates.map((certificate) => (
        <SpacedRowDiv key={certificate.licenseNum}>
          <Text>License: #</Text>
          <ItalicText>{`${certificate.licenseNum}`}</ItalicText>
        </SpacedRowDiv>
      ))}
    </Section>
  </ProfileInfoWrapper>
);
export default ProfileInfo;
