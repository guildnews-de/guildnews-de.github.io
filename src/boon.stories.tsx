import React from 'react';
import { Boon } from '@discretize/gw2-ui-new';
import wpsc from './helper/wpsc';

export default {
  title: 'Effects/Boon',
  component: Boon,
  argTypes: {
    embed: { control: false },
    name: {
      description: 'boon name in english',
      control: {
        type: 'select',
      },
      options: [
        'Aegis',
        'Alacrity',
        'Fury',
        'Might',
        'Protection',
        'Quickness',
        'Regeneration',
        'Resistance',
        'Resolution',
        'Stability',
        'Swiftness',
      ],
    },
    count: {
      control: { type: 'range', min: 1, max: 60, step: 1 },
    },
    noTooltip: { control: 'boolean' },
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
  const { embed, name, count, size, noTooltip, noText, noLink, noIcon } = args;
  return (
    <>
    <div
      data-gw2-embed={embed}
      data-gw2-name={name}
      data-gw2-count={count}
      data-gw2-size={size}
      data-gw2-notooltip={noTooltip}
      data-gw2-notext={noText}
      data-gw2-nolink={noLink}
      data-gw2-noicon={noIcon}
      />
    <script id="gw2embeds" defer src="https://unpkg.com/gw2-embeds@latest/dist/gw2-embeds.js"></script>
    {'Wordpress Shortcode: ' + wpsc(args)}
    </>
  );
}

export const defaultBoon = Template.bind({});
// @ts-ignore
defaultBoon.args = {
  embed: 'boon',
  name: 'Might',
  count: 1,
};
