import React from 'react';
import styled from 'styled-components';
import schema from '../constants.jsx';

const Tile = schema.listCard;

const Name = styled.h1`
  margin: .5vh 0 .25vh .5vw;
  color: ${schema.primary};
  font-size: 1rem;
  font-weight: bold;
`;

const Summary = styled.p`
  margin: 0 1vw;
  font-weight: lighter;
  font-style: italic;
`;

const RowDiv = styled.div`
  margin: 0 1vw;
  display: flex;
  justify-content: left;
`;

const SpacedRowDiv = styled.div`
  margin: 0 .25vw 0 1vw;
  display: flex;
  justify-content: space-between;
`;

const Text = styled.p`
  margin: 0;
`;

const ItalicText = styled.p`
  margin: 0;
  font-style: italic;
`;

const SeekerTile = ({ seeker, toggleModal, getResumeToDisplay }) => (
  <Tile onClick={(event) => { event.preventDefault(); getResumeToDisplay(seeker); toggleModal(); }}>
    <Name>{`${seeker.firstName} ${seeker.lastName}`}</Name>
    <Summary>Javascript | React | Node</Summary>
    <RowDiv>
      <Text>{`Education: ${seeker.education[seeker.education.length - 1].fieldOfStudy.charAt(0).toUpperCase()}${seeker.education[seeker.education.length - 1].fieldOfStudy.slice(1)}`}</Text>
      &nbsp;
      <ItalicText>{`(${seeker.education[seeker.education.length - 1].degreeType})`}</ItalicText>
    </RowDiv>
    <SpacedRowDiv>
      <Text>{`Last Job: ${seeker.workExperience[seeker.workExperience.length - 1].title} @ ${seeker.workExperience[seeker.workExperience.length - 1].employer}`}</Text>
      <ItalicText>{`${seeker.workExperience[seeker.workExperience.length - 1].startDate.slice(0, 4)} – ${seeker.workExperience[seeker.workExperience.length - 1].endDate.slice(0, 4)}`}</ItalicText>
    </SpacedRowDiv>
  </Tile>
);

export default SeekerTile;
