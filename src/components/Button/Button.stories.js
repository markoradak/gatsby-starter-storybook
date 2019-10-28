import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './index';

const props = {
  label: 'Storybook',
  link: '#',
};

storiesOf('Button', module).add('Default', () => <Button {...props} />);
