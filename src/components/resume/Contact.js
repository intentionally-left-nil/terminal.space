import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Header from './Header';
import emailLogo from '../../images/email.png';
import phoneLogo from '../../images/phone.png';
import githubLogo from '../../images/github.png';

const Text = styled.div`
  padding-right: 2px;
  text-align: right;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-bottom: 7px;
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
`;

const ContactRow = ({ text, logo, type }) => (
  <Row>
    <Text>{text}</Text>
    <Icon src={logo} alt={`${type} logo`} />
  </Row>
);
ContactRow.propTypes = {
  text: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

const Contact = ({ email, phone, github }) => (
  <div>
    <Header align="right">Contact</Header>
    <ContactRow text={email} logo={emailLogo} type="email" />
    <ContactRow text={phone} logo={phoneLogo} type="phone" />
    <ContactRow text={github} logo={githubLogo} type="github" />
  </div>
);

Contact.propTypes = {
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
};

export default Contact;
