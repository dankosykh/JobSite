import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const DropDownContainer = styled.div`

`;

const DropDownHeader = styled.div`
`;

const DropDownListContainer = styled.div`
  background-color: white;
  position: absolute;
`;

const DropDownList = styled.ul`
  list-style: none;
  padding-left: 0;
  z-index: 5;
`;

const ListItem = styled.li`
`;

const SavedDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('extremelyInterested');

  const toggleDropdown = (event) => {
    event.preventDefault();
    setIsOpen(!isOpen);
  };

  const handleSelect = (event) => {
    event.preventDefault();
    const { id } = event.target;

    setSelected(id);
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // console.log(selected);
    // call back selected from here
  });

  return (
    <DropDownContainer>
      <DropDownHeader onClick={toggleDropdown}>Dropdown</DropDownHeader>
      {isOpen ? (
        <DropDownListContainer>
          <DropDownList onClick={handleSelect}>
            <ListItem id="extremelyInterested">Extremely Interested</ListItem>
            <ListItem id="veryInterested">Very Interested</ListItem>
            <ListItem id="interested">Interested</ListItem>
          </DropDownList>
        </DropDownListContainer>
      ) : null}
    </DropDownContainer>
  );
};

export default SavedDropdown;
