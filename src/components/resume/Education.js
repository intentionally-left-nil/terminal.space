import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Header from './Header';

const Name = styled.span`
  display: inline;
  font-weight: bold;
`;

const Education = ({ name, degree, start, end }) => (
  <div>
    <Header>Education</Header>
    <div>
      <Name>{name}</Name> {start} - {end}
    </div>
    {degree}
  </div>
);

Education.propTypes = {
  name: PropTypes.string.isRequired,
  degree: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
};

export default Education;
