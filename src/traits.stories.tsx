import React from 'react';
import { Trait } from '@discretize/gw2-ui-new';
import wpsc from './helper/wpsc';

export default {
  title: 'Professions/Traits',
  component: Trait,
  argTypes: {
    embed: { control: false },
    id: {
      description: 'single trait api-ids',
      control: { type: 'number', min: 1 },
    },
    text: { control: 'text'},
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
  const {
    embed,
    id,
    text,
    size,
    noTooltip,
    noText,
    noLink,
    noIcon,
  } = args;
  return (
    <>
    <div
      data-gw2-embed={embed}
      data-gw2-id={id}
      data-gw2-text={text}
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

export const DefaultItem = Template.bind({});
// @ts-ignore
DefaultItem.args = {
  embed: 'traits',
  id: 1503,
};

export const MultipleItems = Template.bind({});
// @ts-ignore
MultipleItems.args = {
  embed: 'traits',
  id: '1446 ; 1503 ; 1215',
  size: true,
  noText: true,
};