import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Header from './Header';
import Section from './Section';

const Text = styled.div`
  padding-right: 2px;
  text-align: right;
`;

const Row = styled.div`
  margin-left: auto;
  margin-right: 0px;
`;

const ContactRow = ({ text, logo }) => (
  <Row>
    <Text>{text}</Text>
  </Row>
);
ContactRow.propTypes = {
  text: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
};

const Contact = ({ email, phone, github }) => (
  <Section>
    <Header align="right">Contact</Header>
    <ContactRow text={email} />
    <ContactRow text={phone} />
    <ContactRow text={github} />
  </Section>
);

Contact.propTypes = {
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
};

export default Contact;
