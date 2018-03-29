import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  font-family: "League Spartan";
  font-size: 48px;
  font-weight: 400;
`;

const colors = [
  '#61BCF4',
  '#FF7370',
  '#FF97C7',
  '#C598F5',
  '#6F79F6',
];

const Row = styled.div`
  color: ${props => props.color};
  text-align: right;
  letter-spacing: -0.06em;
`;

const createRows = (data) => {
  const allRows = data.reduce((output, rows, i) => {
    const color = colors[i];
    return output.concat(rows.map(row => ({ text: row, color })));
  }, []);
  return allRows.map(({ text, color }) => (<Row key={text + color} color={color}>{text}</Row>));
};

const Hero = ({ rows }) => (
  <Container>
    {createRows(rows)}
  </Container>
);

Hero.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
};

export default Hero;
