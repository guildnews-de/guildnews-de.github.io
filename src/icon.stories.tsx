import React from 'react';
import { IconWithText } from '@discretize/gw2-ui-new';
import wpsc from './helper/wpsc';

export default {
  title: 'UI-Elements/Icon',
  component: IconWithText,
  argTypes: {
    embed: { control: false },
    name: {
      description: 'icon type name in english',
      control: {
        type: 'select',
      },
      options: ['ap', 'gems', 'karma', 'laurel', 'title'],
    },
    count: { control: 'number' },
    text: { control: 'text' },
    noText: { control: 'boolean' },
    noIcon: { control: 'boolean' },
    size: { control: 'boolean' },
    className: { control: 'text'  },
  },
};

function Template(args) {
  // @ts-ignore
  window.reloadLib();
  const { embed, name, count, text, size, className, noText, noIcon } = args;
  return (
    <>
    <div
      data-gw2-embed={embed}
      data-gw2-name={name}
      data-gw2-count={count > 0 ? count : undefined}
      data-gw2-text={text}
      data-gw2-size={size}
      data-gw2-class={className}
      data-gw2-notext={noText}
      data-gw2-noicon={noIcon}
    />
    <script id="gw2embeds" defer src="https://unpkg.com/gw2-embeds@latest/dist/gw2-embeds.js"></script>
    {'Wordpress Shortcode: ' + wpsc(args)}
    </>
  );
}

export const defaultIcon = Template.bind({});
// @ts-ignore
defaultIcon.args = {
  embed: 'icon',
  name: 'ap',
  count: 10,
};
