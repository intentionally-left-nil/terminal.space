import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import emailLogo from '../../images/email.png';
import phoneLogo from '../../images/phone.png';
import githubLogo from '../../images/github.png';
import { small, PRINT_FONT_SIZE } from './media';
import { uncrypt } from './crypter';

const Container = styled.div`
  margin-bottom: 20px;
  @media print {
    margin-bottom: 2vh;
  }
`;

const Text = styled.div`
  padding-right: 2px;
  text-align: right;
  ${small(`
  text-align: left;
  `)}
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-bottom: 7px;
  gap: 5px;
  ${small(`
  justify-content: flex-end;
  flex-direction: row-reverse;
  `)}
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
  margin-top: -2px;
  @media print {
    width: ${PRINT_FONT_SIZE};
    height: ${PRINT_FONT_SIZE};
    margin-top: 0vh;
  }
`;

const Anchor = styled.a`
  text-decoration: none;
  color: #000;
  &:hover {
    color: #61bcf4;
  }
`;

const ContactRow = ({ text, logo, type }) => {
  const row = (
    <Row>
      <Text>{text}</Text>
      <Icon src={logo} alt={`${type} logo`} />
    </Row>
  );
  switch (type) {
    case 'github':
      return <Anchor href={`https://github.com/${text}`}>{row}</Anchor>;
    case 'email':
      return <Anchor href={`mailto:${text}`}>{row}</Anchor>;
    default:
      return row;
  }
};

const Contact = ({ email, phone, github }) => (
  <Container>
    <Header align="right">Contact</Header>
    <ContactRow text={email} logo={emailLogo} type="email" />
    <ContactRow text={uncrypt(phone)} logo={phoneLogo} type="phone" />
    <ContactRow text={github} logo={githubLogo} type="github" />
  </Container>
);

export default Contact;
