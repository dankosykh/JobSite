import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import schema from '../constants.jsx';

import { post } from '../../../http';

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
  width: 90vw;
  max-height: 95vh;
  overflow: hidden;
  box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);

  @media (min-width: 768px) {
    width: 25vw;
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
  align-items: center;
  justify-content: space-around;
`;

const FieldSet = styled.fieldset`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 5px;
  margin: 1vh 0;
  width: 90%;
  max-width: 90%;

  @media (min-width: 768px) {
    flex-wrap: none;
    justify-content: space-between;
  }
`;

const Legend = styled.legend`
  color: #424242;
`;

const Radio = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 15px;
  height: 15px;
  top: 2px;
  border-radius: 50%;
  background-color: #fff;

  position: relative;
  content: '';
  display: inline-block;
  visibility: visible;
  border: 1px solid #424242;
  &:checked {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    position: relative;
    top: 2px;
    background-color: ${schema.primary};
    background-clip: content-box;
    padding: 1px;
    content: '';
    display: inline-block;
    visibility: visible;
    border: 1px solid #424242;
  }
  &:focus { outline: none; }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const Button = styled.button`
    margin: auto;
    width: 40vw;
    min-height: 3vh;
    font: inherit;
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 700;
    color: #fff;
    background: ${schema.primary};
    border: none;
    border-radius: 100px;
    cursor: pointer;
    outline: none;
    position: relative;
    padding: 10px;
    ${schema.hoverEffect}

    @media (min-width: 768px) {
      width: 10vw;

    }
`;

const SaveJobModal = (props) => {
  const { seekerId, jobListingId } = props;
  const [interestLevel, setInterest] = useState('3');

  const handleChange = (event) => {
    const { value } = event.target;
    setInterest(value);
  };

  const handleSave = (event) => {
    event.preventDefault();

    const postData = {
      seekerId,
      savedJobsObj: {
        jobListingId,
        interestLevel,
      },
    };
    post('api/seekerdata/savedjob', postData)
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };

  return ReactDOM.createPortal(
    <Wrapper onMouseDown={(event) => { event.stopPropagation(); }}>
      <Options>
        <Form id="interest-form" onSubmit={handleSave}>
          <FieldSet required id="interest" onChange={handleChange}>
            <Legend>Interest Level</Legend>
            <label htmlFor="interest">
              <i className="far fa-grin-stars fa-3x"></i>
              <Radio type="radio" name="interest" value="3" />
            </label>
            <label htmlFor="interest">
              <i className="far fa-grin fa-3x"></i>
              <Radio type="radio" name="interest" value="2" />
            </label>
            <label htmlFor="interest">
              <i className="far fa-smile fa-3x"></i>
              <Radio type="radio" name="interest" value="1" />
            </label>
          </FieldSet>

          <ButtonWrapper>
            <Button type="submit" value="saveJob">Save</Button>
          </ButtonWrapper>
        </Form>

      </Options>
    </Wrapper>,
    document.getElementById('modal-root') || document.createElement('div'), // for testing purposes
  );
};

export default SaveJobModal;
