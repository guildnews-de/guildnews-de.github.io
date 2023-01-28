import React from 'react';
import { Specialization } from '@discretize/gw2-ui-new';
import wpsc from './helper/wpsc';

export default {
  title: 'Professions/Specialization',
  component: Specialization,
  argTypes: {
    embed: { control: false },
    id: {
      description: 'specialization api-ids',
      control: { type: 'number', min: 1 },
    },
    noText: { control: 'boolean' },
    noLink: { control: 'boolean' },
    noIcon: { control: 'boolean' },
    size: { control: 'boolean' },
    className: { control: 'text' },
  },
};

function Template(args) {
  // @ts-ignore
  window.reloadLib();
  const { embed, id, size, noText, noLink, noIcon } = args;
  return (
    <>
    <div
      data-gw2-embed={embed}
      data-gw2-id={id}
      data-gw2-size={size}
      data-gw2-notext={noText}
      data-gw2-nolink={noLink}
      data-gw2-noicon={noIcon}
      />
    <script id="gw2embeds" defer src="https://unpkg.com/gw2-embeds@latest/dist/gw2-embeds.js"></script>
    {'Wordpress Shortcode: ' + wpsc(args)}
    </>
  );
}

export const DefaultProf = Template.bind({});
// @ts-ignore
DefaultProf.args = {
  embed: 'spec',
  id: 42,
};
