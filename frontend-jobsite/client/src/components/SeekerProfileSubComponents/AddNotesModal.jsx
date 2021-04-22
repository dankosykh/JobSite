import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { post } from '../../../http';
import schema from '../constants.jsx';
import NotesDropDown from './NotesDropDown.jsx';

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
  z-index: 5;
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

const Input = styled.input`
`;

const TextArea = styled.textarea`
  padding: 2vh 1vw;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Button = schema.navButton;

const AddNotesModal = (props) => {
  const { display, seekerId } = props;
  const [note, setNote] = useState('');
  const [noteCategory, setNoteCategory] = useState('personal');
  const [noteTitle, setNoteTitle] = useState('');

  const handleChange = (event) => {
    const { value } = event.target;

    setNote(value);
  };
  const handleTitleChange = (event) => {
    setNoteTitle(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // call function to send data
    display(false);
  };

  const handleCategory = (category) => {
    setNoteCategory(category);
  };

  const submitNote = () => {
    const postData = {
      seekerId,
      noteObj: {
        category: noteCategory,
        title: noteTitle,
        body: note,
      },
    };
    post('api/seekerdata/note', postData)
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };

  return ReactDOM.createPortal(
    <Wrapper onMouseDown={(event) => event.stopPropagation()}>
      <Options>
        <Form onSubmit={handleSubmit}>
          <Input onChange={handleTitleChange} type="input" placeholder="Title..." />
          <TextArea
            id="noteText"
            name="note"
            rows="10"
            cols="30"
            onChange={handleChange}
            value={note}
          />
          <NotesDropDown select={handleCategory} />
          <ButtonWrapper>
            <Button type="submit" onClick={submitNote} value="Submit">Submit</Button>
          </ButtonWrapper>
        </Form>
      </Options>
    </Wrapper>,
    document.getElementById('modal-root') || document.createElement('div'), // for testing purposes
  );
};

export default AddNotesModal;
