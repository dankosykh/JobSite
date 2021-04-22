import React from 'react';
import styled from 'styled-components';
import FiltersModal from './FiltersModal.jsx';
import schema from '../constants.jsx';

const Wrapper = styled.div`
  width: max(10vw, 100px);
  display: flex;
  justify-content: center;
`;
const ModalBackground = schema.modalBackground;
const Button = schema.outlinedButton;

class Filters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  }

  render() {
    const { show } = this.state;
    const { setFilters } = this.props;

    return (
      <Wrapper>
        <Button onClick={this.toggleModal}>FILTERS</Button>
        {show
          ? (
            <ModalBackground onMouseDown={this.toggleModal}>
              <FiltersModal setFilters={setFilters} />
            </ModalBackground>
          ) : null}
      </Wrapper>
    );
  }
}

export default Filters;
