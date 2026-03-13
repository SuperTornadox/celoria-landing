import React from 'react'
import { act, render, screen } from '@testing-library/react'
import Screenshots from '@/components/Screenshots'

describe('Screenshots Unit', () => {
  it('renders default slide content', () => {
    render(<Screenshots />)

    expect(screen.getByRole('heading', { name: 'Appointment Board' })).toBeInTheDocument()
    expect(screen.getByText('Board view for instant workload balance')).toBeInTheDocument()
  })

  it('autoplays to the next slide', () => {
    vi.useFakeTimers()
    render(<Screenshots />)

    act(() => {
      vi.advanceTimersByTime(4600)
    })

    expect(screen.getByRole('heading', { name: 'Customer Management' })).toBeInTheDocument()
    vi.useRealTimers()
  })
})
