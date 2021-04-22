import React, { useState } from 'react';
import styled from 'styled-components';
import schema from '../constants.jsx';
import { get } from '../../../http';

const Form = styled.form`
  width: 95%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    width: 34vw;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Input = schema.searchField;
const Button = schema.searchButton;

const SearchBar = (props) => {
  const [search, setSearch] = useState('');

  const handleChange = (event) => {
    const { value } = event.target;
    setSearch(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (search === '') { return; }
    get('api/listing/search', { params: { search } })
      .then((data) => props.getSearchedJobs(data))
      .then(setSearch(''))
      .catch((e) => console.log(e));
    props.setSearch(search);
  };

  return (
    <Form id="searchBar" onSubmit={handleSubmit}>
      <Input
        id="search"
        onChange={handleChange}
        type="text"
        name="search"
        value={search}
        placeholder="Enter search term..."
      />
      <Button type="submit" value="Search">SEARCH</Button>
    </Form>
  );
};

export default SearchBar;
