import React from 'react';
import TwoColumns, { LeftColumn, RightColumn } from './TwoColumns';
import Contact from './Contact';
import Hero from './Hero';
import Skills from './Skills';

const createHero = () => (
  <Hero rows={
    [
      [
        'hello',
        'there',
        "i'm anil",
        'kulkarni',
        "and i'm a",
      ],
      [
        'software',
        'engineer',
      ],
      [
        'EMT',
      ],
      [
        'teacher',
      ],
      [
        'leader',
      ],
    ]}
  />
);

const Resume = () => (
  <TwoColumns>
    <LeftColumn>
      {createHero()}
      <Contact email="anil@terminal.space" phone="425-748-4484" github="AnilRedshift" />
    </LeftColumn>
    <RightColumn>
      <Skills
        skills={[
          ['Elixir', 'JS', 'C', 'C++', 'Python', 'Ruby'],
          ['Empathy', 'Teaching', 'Patience'],
        ]}
      />
    </RightColumn>
  </TwoColumns>
);

export default Resume;
