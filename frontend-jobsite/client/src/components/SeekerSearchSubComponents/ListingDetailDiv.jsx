import React, { useState } from 'react';
import styled from 'styled-components';
import SaveJobModal from './SaveJobModal.jsx';
import schema from '../constants.jsx';

const JobDetailWrapper = styled.div`
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

const JobDisplay = styled.div`
  height: 98%;
  width: 98%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: solid 1px #e0e0e0;
  border-radius: 10px;
  background: #ffffff;
`;

const JobDetail = styled.div`
  height: 90%;
  width: 98%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const Wrapper = styled.div`
  height: 10%;
  display: flex;
  justify-content: center;
`;

const ModalBackground = schema.modalBackground;
const Button = schema.navButton;

const SpacedRowDiv = styled.div`
  margin: 2vh 1vw .5vh 1vw;
  display: flex;
  justify-content: space-evenly;
`;

const Title = styled.h1`
  margin: 2vh 0 .25vh 0;
  color: ${schema.primary};
  font-size: 1.5rem;
  font-weight: bold;
`;

const Company = styled.p`
  margin: 0 1vw;
  font-size: 1.15rem;
  font-weight: lighter;
  font-style: italic;
`;

const Description = styled.p`
  margin: 0 1vw;
  font-weight: lighter;
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

const ListingDetailDiv = ({ seekerId, jobToDisplay }) => {
  const [show, setShow] = useState(false);

  const toggleModal = (event) => {
    event.preventDefault();
    setShow(!show);
    // send new note back up
  };

  return (
    <JobDetailWrapper>
      {!jobToDisplay && <div>Select a job listing for more details</div>}
      {jobToDisplay && (
      <JobDisplay>
        <JobDetail>
          <Title>{jobToDisplay.title}</Title>
          <Company>{jobToDisplay.company}</Company>
          <Description>{`${jobToDisplay.city}`}</Description>
          <SpacedRowDiv>
            <Description>{`Job Type: ${jobToDisplay.employmentType.charAt(0).toUpperCase()}${jobToDisplay.employmentType.slice(1)}`}</Description>
            <Description>{`Experience Level: ${jobToDisplay.experienceLevel.charAt(0).toUpperCase()}${jobToDisplay.experienceLevel.slice(1)}`}</Description>
            <Description>{`Location: ${jobToDisplay.workLocationType.charAt(0).toUpperCase()}${jobToDisplay.workLocationType.slice(1)}`}</Description>
          </SpacedRowDiv>
          <Section>
            <SectionTitle>Job Description</SectionTitle>
            <Description>{jobToDisplay.jobDescription}</Description>
          </Section>
          <Section>
            <SectionTitle>Requirements</SectionTitle>
            {jobToDisplay.requirements.map((req) => <Description>{req}</Description>)}
          </Section>
          <Section>
            <SectionTitle>Industry</SectionTitle>
            <Description>{jobToDisplay.industry}</Description>
          </Section>
          <Section>
            <SectionTitle>Salary and Benefits</SectionTitle>
            <Description>{`Salary: $${jobToDisplay.salary.slice(0, jobToDisplay.salary.length - 3)},${jobToDisplay.salary.slice(jobToDisplay.salary.length - 3)}`}</Description>
            { jobToDisplay.benefits.map((benefit) => <Description>{`Benefits: ${benefit}`}</Description>)}
          </Section>
          <Section>
            <SectionTitle>{`About ${jobToDisplay.company}`}</SectionTitle>
            <Description>{jobToDisplay.companyDescription}</Description>
          </Section>
        </JobDetail>
        <Wrapper>
          <Button onClick={toggleModal}>Save</Button>
          {show
            ? (
              <ModalBackground onMouseDown={toggleModal}>
                <SaveJobModal
                  toggleModal={toggleModal}
                  seekerId={seekerId}
                  jobListingId={jobToDisplay._id}
                />
              </ModalBackground>
            ) : null}
        </Wrapper>
      </JobDisplay>
      )}

    </JobDetailWrapper>
  );
};

export default ListingDetailDiv;
