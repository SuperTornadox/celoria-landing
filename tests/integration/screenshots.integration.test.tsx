import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Screenshots from '@/components/Screenshots'

describe('Screenshots Integration', () => {
  it('switches slide when selecting a feature button', async () => {
    render(<Screenshots />)

    const customerButton = screen.getAllByRole('button', { name: /Customer Management/i })[0]
    await userEvent.click(customerButton)

    expect(screen.getByRole('heading', { name: 'Customer Management' })).toBeInTheDocument()
    expect(screen.getByText('Client timeline in one profile')).toBeInTheDocument()
  })

  it('supports keyboard arrow navigation', () => {
    render(<Screenshots />)

    fireEvent.keyDown(window, { key: 'ArrowRight' })
    expect(screen.getByRole('heading', { name: 'Customer Management' })).toBeInTheDocument()

    fireEvent.keyDown(window, { key: 'ArrowLeft' })
    expect(screen.getByRole('heading', { name: 'Appointment Board' })).toBeInTheDocument()
  })

  it('toggles autoplay state with pause button', () => {
    render(<Screenshots />)

    const pauseButton = screen.getByRole('button', { name: 'Pause' })
    fireEvent.click(pauseButton)
    expect(screen.getByRole('button', { name: 'Play' })).toBeInTheDocument()
  })
})
