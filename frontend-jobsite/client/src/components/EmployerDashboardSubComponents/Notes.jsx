import React, { useState } from 'react';
import styled from 'styled-components';

import NotesCard from './NotesCard.jsx';
import AddNotesModal from './AddNotesModal.jsx';
import schema from '../constants.jsx';

const NotesWrapper = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeaderWrapper = styled.div`
  width: 89%;
  height: 5%;
  background: ${schema.secondary};
  color: #FFF;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4%;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
`;

const ModalBackground = schema.modalBackground;

const Button = styled.button`
  padding: 0 1.25vw;
  background: white;
  border: 1px solid #424242;
  border-radius: 5px;
  color: #424242;
  ${schema.hoverEffect}
`;

const Notes = ({ notes }) => {
  // const notes = [
  //   { title: 'title', text: 'I need to call the interviewer.' },
  // ];
  const [showAdd, setShowAdd] = useState(false);

  const toggleModal = (event) => {
    event.preventDefault();
    setShowAdd(!showAdd);
    // send new note back up
  };
  const dummySeekerId = '606d2039fa660c4ce0b471fd';

  return (
    <NotesWrapper>
      <HeaderWrapper>
        Notes
        <Button onClick={toggleModal}>ADD NOTE</Button>
      </HeaderWrapper>
      {showAdd
        ? (
          <ModalBackground onMouseDown={toggleModal}>
            <AddNotesModal
              seekerId={dummySeekerId}
              toggleModal={toggleModal}
              display={setShowAdd}
            />
          </ModalBackground>
        ) : null}
      {notes.map((note) => (
        <NotesCard
          key={note.dateCreated}
          note={note}
        />
      ))}
    </NotesWrapper>
  );
};

export default Notes;
