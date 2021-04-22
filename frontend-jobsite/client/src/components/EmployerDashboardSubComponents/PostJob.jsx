import React from 'react';
import styled from 'styled-components';

import PostJobModal from './PostJobModal.jsx';
import schema from '../constants.jsx';

const UpperDashboardWrapper = styled.div`
  width: 100%;
  height: 8vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    justify-content: space-around;
    flex-direction: row;
  }
`;

const ModalBackground = schema.modalBackground;
const Button = schema.navButton;

class PostJob extends React.Component {
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

    return (
      <UpperDashboardWrapper>
        <Button type="submit" onClick={this.toggleModal}>POST A NEW JOB</Button>
        { show
          ? (
            <ModalBackground onMouseDown={this.toggleModal}>
              <PostJobModal employerId={this.props.employerId} toggleModal={this.toggleModal} />
            </ModalBackground>
          ) : null}
      </UpperDashboardWrapper>
    );
  }
}

export default PostJob;
