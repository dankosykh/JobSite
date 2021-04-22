import React, { useState } from 'react';
import styled from 'styled-components';

const Select = styled.select`
`;

const Option = styled.option`
`;

const NotesDropDown = ({ select }) => {
  const [selected, setSelected] = useState('personal');

  const handleSelect = (event) => {
    const { value } = event.target;
    setSelected(value);
    select(value);
  };

  return (
    <Select onChange={handleSelect}>
      <Option id="personal" value="personal">Personal</Option>
      <Option id="listing" value="listing">Listings</Option>
      <Option id="interview" value="interview">Interviews</Option>
      <Option id="application" value="application">Application</Option>
      <Option id="company" value="company">Company</Option>
    </Select>
  );
};

export default NotesDropDown;
