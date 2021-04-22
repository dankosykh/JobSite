import React from 'react';
import styled from 'styled-components';
import schema from '../constants.jsx';
import { get } from '../../../http';

const Form = styled.form`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    justify-content: space-between;
    width: 36%;
    flex-direction: row;
  }
`;

const Input = schema.searchField;
const Button = schema.searchButton;

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const field = event.target.name;
    const { value } = event.target;

    this.setState({
      [field]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.search === '') { return; }
    get('api/resume/search', { params: this.state })
      .then((data) => this.props.getSearchedSeekers(data))
      .then(() => this.setState({ search: '' }))
      .catch((e) => console.log(e));
  }

  render() {
    const { search } = this.state;

    return (
      <Form id="search" onSubmit={this.handleSubmit}>
        <Input
          onChange={this.handleChange}
          type="text"
          name="search"
          value={search}
          placeholder="Enter search term..."
        />
        <Button type="submit" value="Search">SEARCH</Button>
      </Form>
    );
  }
}

export default SearchBar;
