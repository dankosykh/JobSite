import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Select = styled.select`
`;

const Option = styled.option`
`;

const NotesDropDown = ({ select }) => {
  const [selected, setSelected] = useState('personal');

  const handleSelect = (event) => {
    const { id } = event.target;

    setSelected(id);
  };

  useEffect(() => {
    select(selected);
  });

  return (
    <Select id="category" onChange={handleSelect}>
      <Option id="personal" value={selected}>Personal</Option>
      <Option id="listing" value={selected}>Listings</Option>
      <Option id="interview" value={selected}>Interviews</Option>
      <Option id="application" value={selected}>Application</Option>
      <Option id="company" value={selected}>Company</Option>
    </Select>
  );
};

export default NotesDropDown;
