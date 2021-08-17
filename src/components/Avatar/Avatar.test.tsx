// src/components/Avatar/Avatar.test.tsx
import { render, screen } from '@testing-library/react'
import { Avatar } from './Avatar'

describe('Avatar', () => {
  test('renders a default avatar with placeholder', async () => {
    render(<Avatar placeholder="RW" />)
    expect(screen.getByText('RW')).toBeInTheDocument()
  })

  test('renders an avatar with image', async () => {
    render(
      <Avatar imgSrc="http://daisyui.com/tailwind-css-component-profile-1@94w.png" />,
    )
    expect(screen.getByAltText('avatar')).toBeInTheDocument()
  })
})
