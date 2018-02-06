import React from 'react';

import { storiesOf } from '@storybook/react';
import Demo1 from './Demo@1.0.0';
import Demo2 from './Demo@2.0.0';

storiesOf('Basic React', module)
  .add('Dialog Demo 1', () => <Demo1 />)
  .add('Dialog Demo 2', () => <Demo2 />);
