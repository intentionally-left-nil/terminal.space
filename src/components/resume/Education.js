import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import { small } from './media';

const Name = styled.span`
  display: inline;
  font-weight: bold;
`;

const Body = styled.div`
  text-align: right;
  ${small(`
  text-align: left;
  `)}
`;

const Wrapper = styled.div`
  margin-top: 30px;
  @media print {
    margin-top: 0vh;
  }
`;

const Education = ({ name, degree }) => (
  <Wrapper>
    <Header align="right">Education</Header>
    <Body>
      <Name>{name}</Name>
      <div>{degree}</div>
    </Body>
  </Wrapper>
);

export default Education;
