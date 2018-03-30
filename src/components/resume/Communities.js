import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Header from './Header';

const Name = styled.span`
  display: inline;
  font-weight: bold;
`;

const Row = styled.li`
  display: list-item;
`;

const List = styled.ul`
  padding-left: 1.3em;
`;

const createRows = communities => (
  communities.map(({ name, role }) => (
    <Row key={name + role}>
      <Name>{name}</Name> - {role}
    </Row>
  ))
);

const Communities = ({ communities }) => (
  <div>
    <Header>Community</Header>
    <List>
      {createRows(communities)}
    </List>
  </div>
);

Communities.propTypes = {
  communities: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    role: PropTypes.string,
  })).isRequired,
};

export default Communities;
