import React from 'react';
import TwoColumns, { LeftColumn, RightColumn } from './TwoColumns';
import Communities from './Communities';
import Contact from './Contact';
import Hero from './Hero';
import Jobs from './Jobs';
import Skills from './Skills';
import communitiesData from './data/communitiesData';
import heroData from './data/heroData';
import jobData from './data/jobData';
import skillsData from './data/skillsData';

const Resume = () => (
  <TwoColumns>
    <LeftColumn>
      <Hero rows={heroData} />
      <Contact email="anil@terminal.space" phone="425-748-4484" github="AnilRedshift" />
    </LeftColumn>
    <RightColumn>
      <Skills skills={skillsData} />
      <Jobs jobs={jobData} />
      <Communities communities={communitiesData} />
    </RightColumn>
  </TwoColumns>
);

export default Resume;
