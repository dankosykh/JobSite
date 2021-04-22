import React from 'react';
import styled from 'styled-components';

import Applicant from './Applicant.jsx';

const ApplicantsWrapper = styled.div`
  height: 80%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  width: 100%;
  min-height: 5%;
  text-align: center;
  font-family: Arial, sans-serif;
  font-size: 1rem;
  font-weight: bold;
  line-height: 2.5rem;
`;

const ListWrapper = styled.div`
  height: 95%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;

  /* Hide scrollbar for Chrome, Safari and Opera */
  ::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  ::-ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
}
`;

const List = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const JobApplicants = ({
  selectedJobPostingId, jobApplicants,
}) => (
  <ApplicantsWrapper>
    <Header>{`Current Applicants: ${jobApplicants.length}`}</Header>
    <ListWrapper>

      <List>
        {/* Delete the following once routed */}
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((applicant) => (
          <Applicant
            applicant={applicant}
            key={applicant}
          />
        ))}

        {/* Use the following once routed having an initial conditional check for if 'selectedJobPostingId' is defined, then filter based on it */}

        {/* {jobApplicants.map((applicant) => (
          <Applicant
            applicant={applicant}
            key={applicant._id}
          />
        ))} */}
      </List>
    </ListWrapper>
  </ApplicantsWrapper>
);

export default JobApplicants;
