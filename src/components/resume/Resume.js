import React from 'react';
import styled from 'styled-components';
import TwoColumns, { LeftColumn, RightColumn } from './TwoColumns';
import Communities from './Communities';
import Contact from './Contact';
import Education from './Education';
import Hero from './Hero';
import Jobs from './Jobs';
import Skills from './Skills';
import resumeData from './resumeData';

const Container = styled.div`
  background-color: #FFF;
  overflow-y: auto;
  height: 100vh;
`;

const Resume = () => (
  <Container>
    <TwoColumns>
      <LeftColumn>
        <Hero rows={resumeData.introHero} />
        <Contact {...resumeData.contact} />
        <Education {...resumeData.education} />
      </LeftColumn>
      <RightColumn>
        <Skills skills={resumeData.skills} />
        <Jobs jobs={resumeData.jobs} />
        <Communities communities={resumeData.communities} />
      </RightColumn>
    </TwoColumns>
  </Container>
);

export default Resume;
