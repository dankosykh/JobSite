import React from 'react';
import styled from 'styled-components';
import FindJobSeekersPortal from './EmployerSearchSubComponents/FindJobSeekersPortal.jsx';
import schema from './constants.jsx';

const EmployerSearchWrapper = styled.div`
  display: flex;
  margin: 0;
  flex-direction: column;
  justify-content: center;
  background: #F5F5F5;
  align-items: center;
  height: 94vh;
  max-width: 100vw;
`;
const NavButtonDiv = schema.navButtonDiv;
const NavButton = schema.navButton;

const EmployerSearch = () => (
  <EmployerSearchWrapper>
    <NavButtonDiv>
      <NavButton href={`${window.location.origin}/#/employer`}>DASHBOARD</NavButton>
      <NavButton href={`${window.location.origin}/#/employerSearch`}>HIRE</NavButton>
    </NavButtonDiv>
    <FindJobSeekersPortal />
  </EmployerSearchWrapper>
);

export default EmployerSearch;
