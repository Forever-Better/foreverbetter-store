// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import type { SpinnerProps } from './Spinner';
import { Spinner } from './Spinner';

const story: Meta<SpinnerProps> = {
  title: 'Spinner',
  component: Spinner,
  parameters: {
    themes: {
      default: 'light',
      list: [
        { name: 'light', class: 'light', color: '#ffffff' },
        { name: 'dark', class: 'dark', color: '#000000' }
      ]
    }
  }
};

export default story;
type Story = StoryObj<SpinnerProps>;

export const Playground: Story = {};
