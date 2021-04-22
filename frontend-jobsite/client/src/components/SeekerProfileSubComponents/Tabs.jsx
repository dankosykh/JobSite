import React, { useState } from 'react';
import styled from 'styled-components';

import Reminders from './Reminders.jsx';
import SavedJobs from './SavedJobs.jsx';
import AppliedJobs from './AppliedJobs.jsx';
import Notes from './Notes.jsx';
import schema from '../constants.jsx';

const PersonalContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 3vh 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #FFF;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  box-shadow: 0 3px 10px rgba(0,0,0,0.16), 0 3px 10px rgba(0,0,0,0.23);
  font-family: Arial, sans-serif;
  color: #424242;

  @media (min-width: 768px) {
    width: 60vw;
    margin: 0;
  }
`;

const TabsWrapper = styled.div`
  width: 97%;
  height: 5vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Tab = styled.div`
  width: 24.7%;
  background: ${(props) => (props.selected ? '#F5F5F5' : schema.secondary)};
  color: ${(props) => (props.selected ? schema.primary : '#FFF')};
  font-weight: ${(props) => (props.selected ? 'bold' : 'normal')};
  font-size: .8rem;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  ${schema.hoverEffect}

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

const ContentWrapper = styled.div`
  width: 97%;
  height: 92%;
  background-color: #F5F5F5;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;

  /* Hide scrollbar for Chrome, Safari and Opera */
  ::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  ::-ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
`;

const Tabs = (props) => {
  const {
    seekerId, reminders, savedJobs, appliedJobs, notes,
  } = props;
  const [selectedTab, setSelectedTab] = useState('reminders');
  const [tab, setTab] = useState('reminders');
  const toggleTab = (id) => {
    setTab(id);
    setSelectedTab(id);
  };

  const handleClick = (event) => {
    const { id } = event.target;

    event.preventDefault();
    toggleTab(id);
  };

  return (
    <PersonalContentWrapper>
      <TabsWrapper className="tabs">
        <Tab selected={selectedTab === 'reminders'} id="reminders" onClick={handleClick}>REMINDERS</Tab>
        <Tab selected={selectedTab === 'savedJobs'} id="savedJobs" onClick={handleClick}>SAVED JOBS</Tab>
        <Tab selected={selectedTab === 'appliedJobs'} id="appliedJobs" onClick={handleClick}>APPLIED JOBS</Tab>
        <Tab selected={selectedTab === 'notes'} id="notes" onClick={handleClick}>NOTES</Tab>
      </TabsWrapper>
      <ContentWrapper>
        {tab === 'reminders' ? <Reminders seekerId={seekerId} reminders={reminders} /> : null}
        {tab === 'savedJobs' ? <SavedJobs seekerId={seekerId} savedJobs={savedJobs} /> : null}
        {tab === 'appliedJobs' ? <AppliedJobs appliedJobs={appliedJobs} /> : null}
        {tab === 'notes' ? <Notes seekerId={seekerId} notes={notes} /> : null}
      </ContentWrapper>
    </PersonalContentWrapper>
  );
};

export default Tabs;
