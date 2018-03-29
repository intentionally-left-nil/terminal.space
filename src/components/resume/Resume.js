import React from 'react';
import TwoColumns, { LeftColumn, RightColumn } from './TwoColumns';
import Hero from './Hero';
import Contact from './Contact';

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
      STUFF GOES HERE
    </RightColumn>
  </TwoColumns>
);

export default Resume;
