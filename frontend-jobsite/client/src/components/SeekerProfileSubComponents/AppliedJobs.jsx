import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { post } from '../../../http';
import AppliedJobsCard from './AppliedJobsCard.jsx';

const AppliedJobsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const AppliedJobs = ({ appliedJobs }) => {
  const [jobs, setJobs] = useState(null);
  useEffect(() => {
    let jobIdArray = [];
    if (appliedJobs.length > 0) {
      for (const i of appliedJobs) {
        jobIdArray.push(i.jobListingId);
      }
    }
    const searchBody = {
      data: jobIdArray,
    };
    post('api/listing/savedlistings', searchBody)
      .then((result) => {
        setJobs(result);
      })
      .catch((err) => console.log(err));
  }, [appliedJobs]);

  //   const jobIdArray = [];
  //   if (props.savedJobs.length !== 0) {
  //     for (const job of props.savedJobs) {
  //       jobIdArray.push(job.jobListingId);
  //     }
  //   }
  //   const searchBody = {
  //     data: jobIdArray,
  //   };
  //   post('api/listing/savedlistings', searchBody)
  //     .then((result) => {
  //       setJobData(result);
  //     })
  //     .catch((err) => console.log(err));
  // }, [props.savedJobs]);

  return (
    <AppliedJobsWrapper>
      {jobs && jobs.length > 0 ? jobs.map((job) => <AppliedJobsCard job={job} />) : null }
    </AppliedJobsWrapper>
  );
}
export default AppliedJobs;
