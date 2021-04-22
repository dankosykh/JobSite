import React, { useState } from 'react';
import styled from 'styled-components';
import schema from '../constants.jsx';
import NotesUpdateModal from './NotesUpdateModal.jsx';

const Wrapper = schema.listCard;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 4;
  ${schema.modalBackdrop}
`;

const NoteWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  margin: 0.5vh 1vw;
  color: ${schema.primary};
  font-size: 1rem;
  font-weight: bold;
`;

const Category = styled.div`
  margin: 0.25vh 1vw 0 2vw;
  font-style: italic;
`;

const SpacedRowDiv = styled.div`
  margin: .25vh 1vw;
  display: flex;
  justify-content: space-between;
`;

const Text = styled.p`
  margin: 0.5vh 1vw 0 2vw;
  font-weight: lighter;
`;

const NotesCard = (props) => {
  const {
    seekerId, note: {
      _id, title, body, text, category,
    },
  } = props;
  const [show, setShow] = useState(false);
  const [update, setUpdate] = useState(false);

  const toggleModal = (event) => {
    event.preventDefault();
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();
    setShow(!show);
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    setUpdate(!update);
  };

  return (
    <Wrapper onClick={toggleModal}>
      <NoteWrapper>
        <SpacedRowDiv>
          <Title>
            {`Title: ${title}`}
          </Title>
          <Category>
            {`Category: ${category}`}
          </Category>
        </SpacedRowDiv>
        <Text>
          {body}
        </Text>
      </NoteWrapper>
      {show
        ? (
          <ModalBackground>
            <NotesUpdateModal seekerId={seekerId} noteId={_id} text={text} />
          </ModalBackground>
        ) : null}
    </Wrapper>
  );
};

export default NotesCard;
