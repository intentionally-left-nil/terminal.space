import React from 'react';
import styled from 'styled-components';
import { small, medium } from './media';

const Container = styled.div`
  font-family: 'League Spartan';
  font-size: 56px;
  font-weight: 400;
  line-height: 1.6;
  margin-bottom: 20px;
  @media print {
    font-size: 4.8vh;
    line-height: 1.417;
    margin-bottom: 2vh;
  }
  ${medium(`
  font-size: 48px;
  font-weight: 400;
  line-height: 1.4;
  margin-bottom: 20px;
  `)}
  ${small(`
  display: none;
  `)}
`;

const CondensedContainer = styled.div`
  font-family: 'League Spartan';
  font-size: 24px;
  display: none;
  margin-bottom: 20px;
  ${small(`
  display: inline-flex;
  `)}
`;

const colors = ['#61BCF4', '#FF7370', '#FF97C7', '#C598F5', '#6F79F6'];
const condensedColors = ['#61BCF4', '#6F79F6', '#FF7370', '#FF97C7', '#C598F5'];

const Row = styled.div`
  color: ${(props) => props.color};
  text-align: right;
  letter-spacing: -0.06em;
`;

const CondensedRow = styled.div`
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 100%;
`;

const CondensedItem = styled.span`
  color: ${(props) => props.color};
`;

const createRows = (data) => {
  const allRows = data.reduce((output, rows, i) => {
    const color = colors[i];
    return output.concat(rows.map((row) => ({ text: row, color })));
  }, []);
  return allRows.map(({ text, color }) => (
    <Row key={text + color} color={color}>
      {text}
    </Row>
  ));
};

const CondensedRowWrapper = ({ condensed }) => {
  const rows = condensed.map((text, i) => {
    const color = condensedColors[i];
    return (
      <CondensedItem key={text + color} color={color}>
        {text}
        {' '}
        {i === condensed.length ? '' : ' '}
      </CondensedItem>
    );
  });
  return <CondensedRow>{rows}</CondensedRow>;
};

const Hero = ({ rows, condensed }) => (
  <>
    <CondensedContainer>
      <CondensedRowWrapper condensed={condensed} />
    </CondensedContainer>
    <Container>{createRows(rows)}</Container>
  </>
);

export default Hero;
