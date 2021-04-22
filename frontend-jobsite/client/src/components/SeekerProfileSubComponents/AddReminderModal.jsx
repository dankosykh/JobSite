import React, { useState, useEffect } from 'react';
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

const AddReminderModal = (props) => {
  const { display, seekerId } = props;
  const [note, setNote] = useState('');
  const [reminderCategory, setReminderCategory] = useState('personal');
  const [reminderTitle, setReminderTitle] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  // const [maxDate, setMaxDate] = useState('');

  const handleChange = (event) => {
    const { value } = event.target;

    setNote(value);
  };
  const handleTitleChange = (event) => {
    setReminderTitle(event.target.value);
  };

  const handleCategory = (category) => {
    setReminderCategory(category);
  };

  const handleStart = (event) => {
    const { value } = event.target;
    setStartTime(value);
  };

  const handleEnd = (event) => {
    const { value } = event.target;
    setEndTime(value);
  };

  useEffect(() => {
    let today = new Date();
    today = today.toISOString();

    // add in once maxDate initial state is fixed

    // let endDate = today.split('-');
    // let month = Number(endDate[1]) + 3;

    // if (month > 12) {
    //   month -= 12;
    //   endDate[1] = month.toString();
    // }

    // endDate = endDate.join('-');
    // setMaxDate(endDate.slice(0, today.length - 5));

    setStartTime(today.slice(0, today.length - 5));
    setEndTime(today.slice(0, today.length - 5));
  }, []);

  const submitReminder = (event) => {
    event.preventDefault();
    display(false);
    const postData = {
      seekerId,
      appointment: {
        startTime: `${startTime}Z`,
        endTime: `${endTime}Z`,
        category: reminderCategory,
        title: reminderTitle,
        appointmentNote: note,
      },
    };

    post('api/seekerdata/appointment', postData)
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };

  return ReactDOM.createPortal(
    <Wrapper onMouseDown={(event) => event.stopPropagation()}>
      <Options>
        <Form onSubmit={submitReminder}>
          <Input onChange={handleTitleChange} type="input" placeholder="Title..." required />
          <label htmlFor="starttime">
            Start
            <Input
              type="datetime-local"
              id="starttime"
              name="starttime"
              value={startTime}
              min={startTime}
              max="2050-12-31T00:00:00"
              onChange={handleStart}
            />
          </label>
          <label htmlFor="endtime">
            End
            <Input
              type="datetime-local"
              id="endtime"
              name="endtime"
              value={endTime}
              min={startTime}
              max="2050-12-31T00:00:00"
              onChange={handleEnd}
            />
          </label>
          <TextArea
            id="noteText"
            name="note"
            rows="10"
            cols="30"
            onChange={handleChange}
            value={note}
            required
          />
          <NotesDropDown select={handleCategory} />
          <ButtonWrapper>
            <Button type="submit" onClick={submitReminder} value="Submit">Submit</Button>
          </ButtonWrapper>
        </Form>
      </Options>
    </Wrapper>,
    document.getElementById('modal-root') || document.createElement('div'), // for testing purposes
  );
};

export default AddReminderModal;
