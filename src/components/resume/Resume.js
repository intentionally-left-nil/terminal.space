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
import { PRINT_FONT_SIZE } from './media';

const Container = styled.div`
  background-color: #fff;
  overflow-y: auto;
  height: 100vh;
  @media print {
    font-size: ${PRINT_FONT_SIZE};
    margin: 0px;
  }
`;

const Resume = () => (
  <Container>
    <TwoColumns>
      <LeftColumn>
        <Hero
          rows={resumeData.introHero}
          condensed={resumeData.introHeroCondensed}
        />
        <div>
          <Contact {...resumeData.contact} />
          <Education {...resumeData.education} />
        </div>
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
