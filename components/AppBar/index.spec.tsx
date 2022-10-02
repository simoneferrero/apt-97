import { render, screen } from '@testing-library/react'
import AppBar from '.'

describe('AppBar', () => {
  it('should render correctly', () => {
    render(<AppBar />)

    const foodLink = screen.getByRole('link', { name: /our food/i })
    expect(foodLink).toHaveAttribute('href', '/food')

    const homeLink = screen.getByRole('link', { name: /home/i })
    expect(homeLink).toHaveAttribute('href', '/')

    const drinksLink = screen.getByRole('link', { name: /our drinks/i })
    expect(drinksLink).toHaveAttribute('href', '/drinks')
  })
})
