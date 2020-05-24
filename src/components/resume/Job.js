import React from 'react';
import styled from 'styled-components';
import List from './List';
import Row from './Row';

const Title = styled.div`
  font-weight: bold;
`;

const createRows = (highlights) => highlights.map((text) => <Row key={text}>{text}</Row>);

const Job = ({
  company, role, start, end = 'Present', highlights,
}) => (
  <div>
    <Title>{`${company}, ${role}`}</Title>
    <div>{`${start} - ${end}`}</div>
    <List>{createRows(highlights)}</List>
  </div>
);

export default Job;
