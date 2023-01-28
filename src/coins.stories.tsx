import React from 'react';
import { Coin } from '@discretize/gw2-ui-new';
import wpsc from './helper/wpsc';

export default {
  title: 'UI-Elements/Coins',
  component: Coin,
  argTypes: {
    embed: { control: false },
    value: {
      control: { type: 'number', min:1 }
    },
    size: { control: 'boolean' },
    className: { control: 'text' },
  },
};

function Template(args) {
  // @ts-ignore
  window.reloadLib();
  const { embed, value, size } = args;
  return (
    <>
    <div
      data-gw2-embed={embed}
      data-gw2-value={value}
      data-gw2-size={size}
      />
    <script id="gw2embeds" defer src="https://unpkg.com/gw2-embeds@latest/dist/gw2-embeds.js"></script>
    {'Wordpress Shortcode: ' + wpsc(args)}
    </>
  );
}

export const defaultCoin = Template.bind({});
// @ts-ignore
defaultCoin.args = {
  embed: 'coins',
  value: 1234567,
};
