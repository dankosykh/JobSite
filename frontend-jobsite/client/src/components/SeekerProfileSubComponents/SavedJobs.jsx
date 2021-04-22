/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { post } from '../../../http';
import SavedJobsCard from './SavedJobsCard.jsx';
import DropDown from './DropDown.jsx';

const SavedJobsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SavedJobs = (props) => {
  const [jobData, setJobData] = useState([]);
  const [interestLevel, setInterestLevel] = useState('0');
  const [display, setDisplay] = useState(null);

  useEffect(() => {
    const jobIdArray = [];
    const interestLevelsMap = {};
    if (props.savedJobs.length !== 0) {
      props.savedJobs.forEach((job) => {
        jobIdArray.push(job.jobListingId);
        interestLevelsMap[job.jobListingId] = job.interestLevel;
      });
    }
    const searchBody = { data: jobIdArray };
    post('api/listing/savedlistings', searchBody)
      .then((result) => {
        result.forEach((jobObj) => {
          jobObj.interestLevel = interestLevelsMap[jobObj._id];
        });
        setJobData(result);
      })
      .catch((err) => console.log(err));
  }, [props.savedJobs]);

  const savedJobsMapper = () => {
    if (jobData.length) {
      return (interestLevel === '0'
        ? jobData.map((job, index) => (
          <SavedJobsCard
            key={`${job._id}/${index}`}
            job={job}
            seekerId={props.seekerId}
          />
        ))
        : jobData
          .filter((job) => job.interestLevel === interestLevel)
          .map((job, index) => (
            <SavedJobsCard
              key={`${job._id}/${index}`}
              job={job}
              seekerId={props.seekerId}
            />
          )));
    }
    return null;
  };

  useEffect(() => {
    setDisplay(savedJobsMapper());
  }, [interestLevel, jobData]);

  return (
    <SavedJobsWrapper>
      <DropDown setInterestLevel={setInterestLevel} />
      {display}
    </SavedJobsWrapper>
  );
};

export default SavedJobs;
