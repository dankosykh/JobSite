import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { patchField, deleteField } from '../../../http';
import schema from '../constants.jsx';

const Wrapper = styled.div`
  height: 40vh;
  position: fixed;
  display: table;
  background: #fff;
  padding: 2vh 2vw 1vh 2vw;
  border-radius: 10px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 500;
  max-width: 30vw;
  max-height: 95vh;
  overflow: hidden;
  box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);

  @media (min-width: 768px) {
    width: 50vw;
  }
`;

const Options = styled.div`
  height: 38vh;
  max-height: 95vh;
`;

const Form = styled.form`
  height: 38vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

`;

const TextArea = styled.textarea`
  padding: 2vh 1vw;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Button = schema.navButton;

const NotesUpdateModal = ({ text }) => {
  const [note, setNote] = useState(text);
  // setDefault state to notes prop

  const handleChange = (event) => {
    const { value } = event.target;

    setNote(value);
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    patchField('api/employerdata/note', { seekerId, noteId, body: note })// call function to send note
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const handleDelete = (event) => {
    event.preventDefault();
    // call function to del
    deleteField('api/employerdata/note', { seekerId, noteId })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return ReactDOM.createPortal(
    <Wrapper onMouseDown={(event) => { event.stopPropagation(); console.log('mouseDown')}}>
      <Options onMouseDown={(event) => { event.stopPropagation(); console.log('options')}}>
        <Form onSubmit={handleUpdate}>
          <TextArea
            id="updateText"
            name="note"
            rows="10"
            cols="30"
            onChange={handleChange}
            value={note}
          />
          <ButtonWrapper>
            <Button type="submit">Update</Button>
            <Button onMouseDown={handleDelete}>Delete</Button>
          </ButtonWrapper>
        </Form>

      </Options>
    </Wrapper>,
    document.getElementById('modal-root') || document.createElement('div'), // for testing purposes
  );
};

export default NotesUpdateModal;
