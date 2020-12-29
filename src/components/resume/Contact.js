import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import emailLogo from '../../images/email.png';
import phoneLogo from '../../images/phone.png';
import githubLogo from '../../images/github.png';
import { small } from './media';
import { uncrypt } from './crypter';

const Container = styled.div`
  margin-bottom: 20px;
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
  ${small(`
  justify-content: flex-start;
  `)}
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
  margin-top: -2px;
`;

const ContactRow = ({ text, logo, type }) => (
  <Row>
    <Text>{text}</Text>
    <Icon src={logo} alt={`${type} logo`} />
  </Row>
);

const Contact = ({ email, phone, github }) => (
  <Container>
    <Header align="right">Contact</Header>
    <ContactRow text={email} logo={emailLogo} type="email" />
    <ContactRow text={uncrypt(phone)} logo={phoneLogo} type="phone" />
    <ContactRow text={github} logo={githubLogo} type="github" />
  </Container>
);

export default Contact;
