import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import schema from '../constants.jsx';
import { get } from '../../../http';
import RemindersCard from './RemindersCard.jsx';
import AddReminderModal from './AddReminderModal.jsx';

const RemindersWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const HeaderWrapper = styled.div`
`;
const ModalBackground = schema.modalBackground;
const Button = schema.navButton;

const Reminders = (props) => {
  const { seekerId } = props;

  const [display, setDisplay] = useState(false);

  const toggleModal = (event) => {
    event.preventDefault();

    setDisplay(!display);
  };

  return (
    <RemindersWrapper>
      <HeaderWrapper>
        <Button onClick={toggleModal}>Add</Button>
      </HeaderWrapper>
      {display
        ? (
          <ModalBackground onMouseDown={toggleModal}>
            <AddReminderModal
              seekerId={seekerId}
              display={setDisplay}
            />
          </ModalBackground>
        ) : null}
      {props.reminders.map((reminder) => (
        <RemindersCard
          key={reminder._id}
          seekerId={seekerId}
          reminder={reminder}
        />
      ))}
    </RemindersWrapper>
  );
};

export default Reminders;
