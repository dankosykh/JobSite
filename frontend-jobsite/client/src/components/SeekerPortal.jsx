/* eslint-disable no-console */
import React from 'react';
import styled from 'styled-components';
import { get, post } from '../../http';
import schema from './constants.jsx';
import Account from './SeekerProfileSubComponents/Account.jsx';

const SeekerPortalWrapper = styled.div`
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

class SeekerPortal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      seekerId: null,
      reminders: [],
      savedJobs: [],
      appliedJobs: [],
      notes: [],
      resume: null,
    };
    this.postNote = this.postNote.bind(this);
  }

  componentDidMount() {
    get('api/seekerdata/id', { params: { email: this.props.email } })
      .then((res) => {
        this.setState({ seekerId: res.seekerId });
        return get('api/seekerdata/all', { params: { seekerId: this.state.seekerId } });
      })
      .then((data) => {
        this.setState({
          reminders: data.data.appointments,
          savedJobs: data.data.savedJobs,
          appliedJobs: data.data.applications,
          notes: data.data.notes,
          resume: data.resume,
        }, () => {
          this.props.setSeekerData(this.state);
        });
      })
      .catch((err) => console.log(err));
  }

  postNote(note) {
    const noteBody = {
      seekerId: this.state.seekerId,
      noteObj: note,
    };

    // hook up to the notes component somewhere
    post('api/seekerdata/note', noteBody)
      .then(() => {
        get('api/seekerdata/note/all', { seekerId: this.state.seekerId })
          .then((data) => this.setState({ notes: data.notes }))
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  }

  render() {
    const {
      seekerId, reminders, savedJobs, appliedJobs, notes, resume,
    } = this.state;
    return (
      <SeekerPortalWrapper>
        <NavButtonDiv>
          <NavButton href={`${window.location.origin}/#/seeker`}>PROFILE</NavButton>
          <NavButton href={`${window.location.origin}/#/jobs`}>JOBS</NavButton>
        </NavButtonDiv>
        {resume && (
        <Account
          seekerId={seekerId}
          reminders={reminders}
          savedJobs={savedJobs}
          appliedJobs={appliedJobs}
          notes={notes}
          resume={resume}
          postNote={this.postNote}
        />
        )}
      </SeekerPortalWrapper>
    );
  }
}

export default SeekerPortal;
