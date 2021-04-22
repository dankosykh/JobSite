import React from 'react';
import styled from 'styled-components';

const Job = styled.div`
  margin: .5vh 2vw;
  display: flex;
  flex-direction: column;
`;

const PositionTime = styled.div`
  margin: 0 2vw;
  display: flex;
  justify-content: space-between;
`;

const Position = styled.p`
  margin: 0;
`;

const Timeline = styled.p`
  margin: 0;
  font-style: italic;
`;

const Description = styled.ul`
  margin: .5vh 2vw;
`;

const Work = ({ job }) => (
  <Job>
    <PositionTime>
      <Position>{`${job.title} @ ${job.employer}`}</Position>
      <Timeline>{`${job.startDate.slice(5, 7)}/${job.startDate.slice(0, 4)} – ${job.endDate.slice(5, 7)}/${job.endDate.slice(0, 4)}`}</Timeline>
    </PositionTime>
    <Description>
      {job.description.split(/\r\n|\n|\r/).map((item) => (
        <li key={item[1]}>{item}</li>
      ))}
    </Description>
  </Job>
);

export default Work;
