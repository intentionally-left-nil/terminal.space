import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Header from './Header';

const Row = styled.li`
  display: list-item;
`;

const List = styled.ul`
  padding-left: 1.3em;
`;

const createRows = skills => (
  skills.map(row => <Row key={row.join('')}>{row.join(' | ').trim()}</Row>)
);

const Skills = ({ skills }) => (
  <div>
    <Header>Areas of Expertise</Header>
    <List>
      {createRows(skills)}
    </List>
  </div>
);

Skills.propTypes = {
  skills: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.string,
    ),
  ).isRequired,
};

export default Skills;
