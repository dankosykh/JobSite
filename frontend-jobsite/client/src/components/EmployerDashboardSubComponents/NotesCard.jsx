import React, { useState} from 'react';
import styled from 'styled-components';
import schema from '../constants.jsx';
import NotesUpdateModal from './NotesUpdateModal.jsx';

const Wrapper = schema.listCard;
const ModalBackground = schema.modalBackground;

const Body = styled.div`
`;

const ButtonWrapper = styled.div`
`;

const Button = schema.navButton;

const NotesCard = (props) => {
  const { note: { title, text } } = props;
  const [show, setShow] = useState(false);
  const [update, setUpdate] = useState(false);

  const toggleModal = (event) => {
    event.preventDefault();
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();

    console.log('wrapper');

    setShow(!show);
  };

  const handleChange = (event) => {

  }

  const handleUpdate = (event) => {
    event.preventDefault();
    setUpdate(!update);
  }

  const handleSubmit = (event) => {

  }

  return (
    <Wrapper onClick={toggleModal}>
      {/* <Body>
        {update ? (
          <Form onSubmit={handleSubmit}>
            <TextArea
              id="noteText"
              name="note"
              rows="10"
              cols="30"
              onChange={handleChange}
              value={note}
            />
            <ButtonWrapper>
              <Button type="submit" value="Submit">Submit</Button>
            </ButtonWrapper>
          </Form>) : {text} }
      </Body> */}
      {text}
      {/* <ButtonWrapper>
        <Button onClick={handleUpdate}>Update</Button>

      <Button >Delete</Button>
      </ButtonWrapper> */}
      {show
        ? (
          <ModalBackground>
            <NotesUpdateModal text={text} />
          </ModalBackground>
        ) : null}
    </Wrapper>
  );
};

export default NotesCard;
