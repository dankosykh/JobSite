import React from 'react';
import styled from 'styled-components';

const Degree = styled.div`
  margin: .5vh 1vw;
  display: flex;
  flex-direction: column;
`;

const RowDiv = styled.div`
  margin: 0 1vw;
  display: flex;
  justify-content: left;
`;

const SpacedRowDiv = styled.div`
  margin: 0 1vw 0 2vw;
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

const Education = ({ degree }) => (
  <Degree>
    <RowDiv>
      <Text>{`${degree.fieldOfStudy.charAt(0).toUpperCase()}${degree.fieldOfStudy.slice(1)}`}</Text>
      &nbsp;
      <ItalicText>{`(${degree.degreeType})`}</ItalicText>
    </RowDiv>
    <SpacedRowDiv>
      <Text>{degree.institution}</Text>
      <ItalicText>{degree.yearGraduated}</ItalicText>
    </SpacedRowDiv>
  </Degree>
);

export default Education;
