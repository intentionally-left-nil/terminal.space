import React from 'react';

import { storiesOf } from '@storybook/react';

import Header from '../components/resume/Header';

storiesOf(Header, module)
  .add('normal', () => (<Header>Hello World</Header>))
  .add('right aligned', () => (<Header align="right">Right aligned</Header>));
