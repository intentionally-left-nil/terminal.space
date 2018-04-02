import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Header from './Header';

const Name = styled.span`
  display: inline;
  font-weight: bold;
`;

const Body = styled.div`
  text-align: right;
`;

const Wrapper = styled.div`
  margin-top:30px;
`;

const Education = ({ name, degree, start, end }) => (
  <Wrapper>
    <Header align="right">Education</Header>
    <Body>
      <Name>{name}</Name>
      <div>{start} - {end}</div>
      <div>{degree}</div>
    </Body>
  </Wrapper>
);

Education.propTypes = {
  name: PropTypes.string.isRequired,
  degree: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
};

export default Education;
