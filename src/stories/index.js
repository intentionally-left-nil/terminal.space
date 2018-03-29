import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Header from '../components/resume/Header';

storiesOf(Header, module)
  .add('normal', () => (<Header>Hello World</Header>))
  .add('right aligned', () => (<Header align="right">Right aligned</Header>));
