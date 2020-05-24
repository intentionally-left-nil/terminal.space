import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import List from './List';
import Row from './Row';

const Name = styled.span`
  display: inline;
  font-weight: bold;
`;

const createRows = (communities) => communities.map(({ name, role }) => (
  <Row key={name + role}>
    <Name>{name}</Name>
    {' '}
    -
    {role}
  </Row>
));

const Communities = ({ communities }) => (
  <div>
    <Header>Community</Header>
    <List>{createRows(communities)}</List>
  </div>
);

export default Communities;
