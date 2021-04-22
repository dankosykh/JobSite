import React, { useState } from 'react';
import styled from 'styled-components';
import schema from '../constants.jsx';
import NotesCard from './NotesCard.jsx';
import AddNotesModal from './AddNotesModal.jsx';

const NotesWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeaderWrapper = styled.div`
`;
const ModalBackground = schema.modalBackground;
const Button = schema.navButton;

const Notes = (props) => {
  const { seekerId, notes } = props;

  const [showAdd, setShowAdd] = useState(false);

  const toggleModal = (event) => {
    event.preventDefault();
    setShowAdd(!showAdd);
  };
  // bring id from parent and replace
  return (
    <NotesWrapper>
      <HeaderWrapper>
        <Button onClick={toggleModal}>Add</Button>
      </HeaderWrapper>
      {showAdd
        ? (
          <ModalBackground onMouseDown={toggleModal}>
            <AddNotesModal
              seekerId={seekerId}
              toggleModal={toggleModal}
              display={setShowAdd}
              // postNote={postNote}
            />
          </ModalBackground>
        ) : null}
      {notes.map((note) => (
        <NotesCard
          key={note._id}
          seekerId={seekerId}
          note={note}
        />
      ))}
    </NotesWrapper>
  );
};

export default Notes;
