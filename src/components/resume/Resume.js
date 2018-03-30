import React from 'react';
import TwoColumns, { LeftColumn, RightColumn } from './TwoColumns';
import Communities from './Communities';
import Contact from './Contact';
import Education from './Education';
import Hero from './Hero';
import Jobs from './Jobs';
import Skills from './Skills';
import resumeData from './data/resumeData';

const Resume = () => (
  <TwoColumns>
    <LeftColumn>
      <Hero rows={resumeData.introHero} />
      <Contact {...resumeData.contact} />
    </LeftColumn>
    <RightColumn>
      <Skills skills={resumeData.skills} />
      <Jobs jobs={resumeData.jobs} />
      <Communities communities={resumeData.communities} />
      <Education {...resumeData.education} />
    </RightColumn>
  </TwoColumns>
);

export default Resume;
