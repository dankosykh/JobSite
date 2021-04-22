import React from 'react';
import styled from 'styled-components';

const Certificate = styled.div`
  margin: .5vh 2vw;
  display: flex;
  flex-direction: column;
`;

const RowDiv = styled.div`
  margin: 0 2vw;
  display: flex;
  justify-content: left;
`;

// const SpacedRowDiv = styled.div`
//   margin: 0 4vw;
//   display: flex;
//   justify-content: space-between;
// `;

const Text = styled.p`
  margin: 0;
`;

const ItalicText = styled.p`
  margin: 0;
  font-style: italic;
`;

const Certification = ({ certificate }) => (
  <Certificate>
    <Text>{`${certificate.name}`}</Text>
    <RowDiv>
      <Text>License: #</Text>
      <ItalicText>{`${certificate.licenseNum}`}</ItalicText>
    </RowDiv>
  </Certificate>
);

export default Certification;
