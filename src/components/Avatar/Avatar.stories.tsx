// src/component/Avatar/Avatar.stories.tsx
import { Story, Meta } from '@storybook/react/types-6-0'
import { Avatar, AvatarProps } from './Avatar'

export default {
  title: 'Avatar',
  component: Avatar,
} as Meta

const Template: Story<AvatarProps> = (args) => <Avatar {...args} />

export const Default = Template.bind({})
Default.args = {
  placeholder: 'RW',
}

export const Image = Template.bind({})
Image.args = {
  imgSrc: 'http://daisyui.com/tailwind-css-component-profile-1@94w.png',
  size: 'lg',
}
