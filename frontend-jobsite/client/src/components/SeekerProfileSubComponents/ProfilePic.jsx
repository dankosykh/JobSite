import React from 'react';
import styled from 'styled-components';
import schema from '../constants.jsx';

const Image = styled.img`
  border-radius: 50%;
  padding: 2px;
  border: 3px solid ${schema.primary};
`;

const ProfilePic = () => (
  <div>
    <Image src="test.png" alt="profilePic" width="125px" height="125px" />
  </div>
);

export default ProfilePic;
