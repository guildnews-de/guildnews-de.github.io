import React from 'react';

import { Hide } from './Hide';

export default {
  title: 'Custom_CSS/hide-spoiler',
  component: Hide,
};

const Template = (args) => <Hide {...args} />;

export const Demo = Template.bind({});
Demo.args = {
};