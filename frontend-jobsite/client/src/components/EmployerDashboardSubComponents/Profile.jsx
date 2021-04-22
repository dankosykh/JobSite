import React from 'react';
import styled from 'styled-components';
import schema from '../constants.jsx';

const ProfileWrapper = styled.div`
  height: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  @media (min-width: 768px) {
    width: 32vw;
  }
`;

const Image = styled.img`
  border-radius: 50%;
  padding: 2px;
  border: 3px solid ${schema.primary};
`;

const Name = styled.h1`
  margin: .5vh 0 .25vh 0;
  color: ${schema.primary};
  font-size: 1.5rem;
  font-weight: bold;
`;

const Profile = () => (
  <ProfileWrapper>
    <Image src="test.png" alt="profilePic" width="125px" height="125px" />
    <Name>Ida B Higherin</Name>
  </ProfileWrapper>
);

export default Profile;
