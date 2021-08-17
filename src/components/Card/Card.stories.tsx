// src/component/Avatar/Avatar.stories.tsx
import { Story, Meta } from '@storybook/react/types-6-0'
import { Card, CardProps } from './Card'

import { Button } from '../Button'

export default {
  title: 'Card',
  component: Card,
} as Meta

const Template: Story<CardProps> = (args) => (
  <Card {...args} title="Card Title" actions={<Button>OK</Button>}>
    <p>Here is a card body</p>
  </Card>
)

export const Default = Template.bind({})
Default.args = {}

export const Image = Template.bind({})
Image.args = {
  imgSrc: 'https://picsum.photos/id/1005/400/250',
}
