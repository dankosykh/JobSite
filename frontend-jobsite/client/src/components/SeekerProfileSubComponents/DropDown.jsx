import React, { useState } from 'react';
import styled from 'styled-components';

const Select = styled.select`
`;

const Option = styled.option`
`;

const DropDown = ({ setInterestLevel }) => {
  const [selected, setSelected] = useState('0');

  const handleSelect = (event) => {
    const { value } = event.target;
    setSelected(value);
    setInterestLevel(value);
  };

  return (
    <Select id="interest-select" value={selected} onChange={handleSelect}>
      <Option value="0" selected>Show All</Option>
      <Option value="3">Extremely Interested</Option>
      <Option value="2">Very Interested</Option>
      <Option value="1">Interested</Option>
    </Select>
  );
};

export default DropDown;
