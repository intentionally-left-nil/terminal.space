import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import List from './List';
import Row from './Row';

const Title = styled.div`
  font-weight: bold;
`;

const createRows = highlights => (
  highlights.map(text => <Row key={text}>{text}</Row>)
);

const Job = ({ company, role, start, end, highlights }) => (
  <div>
    <Title>{`${company}, ${role}`}</Title>
    <div>{`${start} - ${end}`}</div>
    <List>
      { createRows(highlights) }
    </List>
  </div>
);

Job.propTypes = {
  company: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string,
  highlights: PropTypes.arrayOf(PropTypes.string).isRequired,
};

Job.defaultProps = {
  end: 'Present',
};

export default Job;
