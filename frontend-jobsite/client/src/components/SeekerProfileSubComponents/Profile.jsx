import React, { useState } from 'react';
import styled from 'styled-components';
import schema from '../constants.jsx';
import ProfilePic from './ProfilePic.jsx';
import ProfileInfo from './ProfileInfo.jsx';
import ResumeFormModal from './ResumeFormModal.jsx';

const ProfileWrapper = styled.div`
  width: 95%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background: #FFF;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  box-shadow: 0 3px 10px rgba(0,0,0,0.16), 0 3px 10px rgba(0,0,0,0.23);

  @media (min-width: 768px) {
    width: 32vw;
  }
`;

const ModalBackground = schema.modalBackground;
const AddResumeButton = schema.outlinedButton;

const Profile = ({ resume }) => {
  const [modal, setModal] = useState(false);

  const handleToggle = (e) => {
    e.preventDefault();
    setModal(!modal);
  };

  const handleClickOut = () => {
    if (modal) setModal(false);
  };

  return (
    <ProfileWrapper onClick={handleClickOut}>
      <ProfilePic />
      <AddResumeButton onClick={handleToggle}>Post Resume</AddResumeButton>
      {
        modal
        && (
        <>
          <ModalBackground />
          <ResumeFormModal />
        </>
        )
      }
      <ProfileInfo resume={resume} />
    </ProfileWrapper>
  );
}
export default Profile;
