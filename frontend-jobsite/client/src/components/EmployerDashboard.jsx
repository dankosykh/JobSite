import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { get } from '../../http';
import PostJob from './EmployerDashboardSubComponents/PostJob.jsx';
import Profile from './EmployerDashboardSubComponents/Profile.jsx';
import Notes from './EmployerDashboardSubComponents/Notes.jsx';
import JobApplicants from './EmployerDashboardSubComponents/JobApplicants.jsx';
import DropDown from './EmployerDashboardSubComponents/DropDown.jsx';
import schema from './constants.jsx';

const PageWrapper = styled.div`
  margin: 0;
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    height: 94vh;
  }
`;

const NavButtonDiv = schema.navButtonDiv;
const NavButton = schema.navButton;
const LowerDashboardWrapper = styled.div`
  width: 95%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  @media (min-width: 768px) {
    height: 80vh;
    flex-direction: row;
  }
`;

const LeftSide = styled.div`
  width: 95%;
  height: 97%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background: #FFF;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  box-shadow: 0 3px 10px rgba(0,0,0,0.16), 0 3px 10px rgba(0,0,0,0.23);

  @media (min-width: 768px) {
    width: 40vw;
  }
`;

const RightSide = styled.div`
  width: 95%;
  height: 97%;
  margin: 3vh 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background: #FFF;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  box-shadow: 0 3px 10px rgba(0,0,0,0.16), 0 3px 10px rgba(0,0,0,0.23);
  font-family: Arial, sans-serif;
  color: #424242;

  @media (min-width: 768px) {
    width: 52vw;
    margin: 0;
  }
`;

const ModalBackground = schema.modalBackground;

class EmployerDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDesktop: false,
      employerId: null,
      resumeToDisplay: null,
      modalOpen: false,
      jobApplicants: [],
      allJobPostings: [],
      selectedJobPostingId: null,
      notes: [],
    };
    this.getSelectedItem = this.getSelectedItem.bind(this);
  }

  componentDidMount() {
    axios({
      url: 'http://localhost:3001/api/employerdata/id',
      method: 'get',
      params: {
        email: this.props.email,
      },
    })
      .then((result) => {
        this.setState({ employerId: result.data.employerNoteId });
        return axios({
          url: 'http://localhost:3001/api/listing/employer',
          method: 'get',
          params: {
            employerId: this.state.employerId,
          },
        });
      })
      .then((data) => {
        this.setState({ allJobPostings: data.data });
        return axios({
          url: 'http://localhost:3001/api/employerdata/note/all',
          method: 'get',
          params: {
            employerId: this.state.employerId,
          },
        });
      })
      .then((response) => {
        this.setState({ notes: response.data.notes });
      })
      .catch((err) => console.log(err));
  }

  getResumeToDisplay(seeker) {
    this.setState({ resumeToDisplay: seeker });
  }

  getSelectedItem(selectedJobPostingId) {
    this.setState({ selectedJobPostingId });
  }

  render() {
    const {
      jobApplicants,
      selectedJobPostingId,
      allJobPostings,
      notes,
    } = this.state;

    return (
      <PageWrapper>
        <NavButtonDiv>
          <NavButton href={`${window.location.origin}/#/employer`}>DASHBOARD</NavButton>
          <NavButton href={`${window.location.origin}/#/employerSearch`}>HIRE</NavButton>
        </NavButtonDiv>
        <PostJob employerId={this.state.employerId} />
        <LowerDashboardWrapper>
          <LeftSide>
            <Profile />
            <Notes notes={notes} />
          </LeftSide>
          <RightSide>
            <DropDown getSelectedItem={this.getSelectedItem} list={allJobPostings} />
            <JobApplicants
              jobApplicants={jobApplicants}
              selectedJobPostingId={selectedJobPostingId}
            />
          </RightSide>
        </LowerDashboardWrapper>
      </PageWrapper>
    );
  }
}

export default EmployerDashboard;
