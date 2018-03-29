import React from 'react';
import Hero from './components/resume/Hero';
import Contact from './components/resume/Contact';

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
  <div>
    {createHero()}
    <Contact email="anil@terminal.space" phone="425-748-4484" github="AnilRedshift" />
  </div>
);

export default Resume;
