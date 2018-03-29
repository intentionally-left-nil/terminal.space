import React from 'react';
import TwoColumns, { LeftColumn, RightColumn } from './TwoColumns';
import Contact from './Contact';
import Hero from './Hero';
import Jobs from './Jobs';
import Skills from './Skills';
import heroData from './data/heroData';
import jobData from './data/jobData';

const skills = [
  ['Elixir', 'JS', 'C', 'C++', 'Python', 'Ruby'],
  ['Empathy', 'Teaching', 'Patience'],
];

const Resume = () => (
  <TwoColumns>
    <LeftColumn>
      <Hero rows={heroData} />
      <Contact email="anil@terminal.space" phone="425-748-4484" github="AnilRedshift" />
    </LeftColumn>
    <RightColumn>
      <Skills skills={skills} />
      <Jobs jobs={jobData} />
    </RightColumn>
  </TwoColumns>
);

export default Resume;
