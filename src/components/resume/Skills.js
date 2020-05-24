import React from 'react';
import Header from './Header';
import List from './List';
import Row from './Row';

const createRows = (skills) => skills.map((row) => <Row key={row.join('')}>{row.join(' | ').trim()}</Row>);

const Skills = ({ skills }) => (
  <div>
    <Header>Areas of Expertise</Header>
    <List>{createRows(skills)}</List>
  </div>
);

export default Skills;
