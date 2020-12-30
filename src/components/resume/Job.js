import React from 'react';
import styled from 'styled-components';
import List from './List';
import Row from './Row';

const Title = styled.span`
  font-weight: bold;
`;

const Date = styled.span`
  font-style: italic;
`;

const CondensedHeaderContainer = styled.div`
  display: none;
  @media print {
    display: inherit;
  }
`;

const HeaderContainer = styled.div`
  @media print {
    display: none;
  }
`;

const createRows = (highlights) => highlights.map((text) => <Row key={text}>{text}</Row>);

const CondensedHeader = ({
  company, role, start, end,
}) => (
  <CondensedHeaderContainer>
    <Title>{`${company}, ${role}`}</Title>
    <Date>{` ${start} - ${end}`}</Date>
  </CondensedHeaderContainer>
);

const Header = ({
  company, role, start, end,
}) => (
  <HeaderContainer>
    <Title>{`${company}, ${role}`}</Title>
    <div>
      <Date>{`${start} - ${end}`}</Date>
    </div>
  </HeaderContainer>
);

const Job = ({
  company, role, start, end = 'Present', highlights,
}) => (
  <div>
    <Header company={company} role={role} start={start} end={end} />
    <CondensedHeader company={company} role={role} start={start} end={end} />
    <List>{createRows(highlights)}</List>
  </div>
);

export default Job;
