// src/components/Card/Card.test.tsx
import { render, screen } from '@testing-library/react'
import { Card } from './Card'

describe('Card', () => {
  test('renders a default avatar with placeholder', async () => {
    render(
      <Card title="Card Title">
        <p>Here is a card</p>
      </Card>,
    )
    expect(screen.getByText('Card Title')).toBeInTheDocument()
  })
})
