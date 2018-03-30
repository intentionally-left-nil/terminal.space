import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Job from './Job';

const Jobs = ({ jobs }) => (
  <div>
    <Header>Professional Experience</Header>
    { jobs.map(job => <Job key={job.start + job.end} {...job} />) }
  </div>
);

Jobs.propTypes = {
  jobs: PropTypes.arrayOf(PropTypes.shape(Job.propTypes)).isRequired,
};

export default Jobs;
