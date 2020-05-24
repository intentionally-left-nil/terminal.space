import React from 'react';
import Header from './Header';
import Job from './Job';

const Jobs = ({ jobs }) => (
  <div>
    <Header>Professional Experience</Header>
    {jobs.map((job) => (
      <Job key={job.start + job.end} {...job} />
    ))}
  </div>
);

export default Jobs;
