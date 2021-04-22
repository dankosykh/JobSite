import React, { useState } from 'react';
import styled from 'styled-components';
import schema from '../constants.jsx';

const Form = styled.form`
  width: 95%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    width: 34vw;
    justify-content: space-between;
    flex-direction: row;
  }
`;

const Input = schema.searchField;
const Button = schema.searchButton;

const Location = (props) => {
  const [location, setLocation] = useState('');

  const handleChange = (event) => {
    const { value } = event.target;

    setLocation(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.setLocation(location);
  };

  return (
    <Form id="locationBar" onSubmit={handleSubmit}>
      <Input id="location" onChange={handleChange} type="text" name="location" value={location} placeholder="Enter location..." />
      <Button type="submit" value="Search">SEARCH</Button>
    </Form>
  );
};

export default Location;
