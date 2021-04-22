import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { deleteField } from '../../../http';
import schema from '../constants.jsx';

const Wrapper = styled.div`
  position: fixed;
  display: table;
  background: #fff;
  padding: 2vh 2vw 1vh 2vw;
  border-radius: 10px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
  max-width: 10vw;
  max-height: 95vh;
  overflow: hidden;
  box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);

  @media (min-width: 768px) {
    width: 50vw;
  }
`;

const Options = styled.div`
  height: 30vh;
  max-height: 95vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const Button = schema.navButton;

const TabModal = (props) => {
  const { toggleModal } = props;

  // NEED SEEKER ID & appointment id!!!!!!!!!!!
  const handleClick = (event) => {
    event.preventDefault();
    toggleModal();
    deleteField('api/employerdata/appointment', { seekerId, appointmentId })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return ReactDOM.createPortal(
    <Wrapper onMouseDown={(event) => event.stopPropagation()}>
      <Options>
        <i className="fas fa-trash-alt fa-5x" />
        <Button onClick={handleClick}>Delete</Button>
      </Options>
    </Wrapper>,
    document.getElementById('modal-root') || document.createElement('div'), // for testing purposes
  );
};

export default TabModal;
