import { render, screen } from '@testing-library/react'
import Footer, { LINKEDIN_HREF, GITHUB_HREF } from '.'

describe('Footer', () => {
  it('should render correctly', () => {
    render(<Footer />)

    const linkedinLink = screen.getByRole('link', { name: /simone/i })
    expect(linkedinLink).toHaveAttribute('href', LINKEDIN_HREF)

    const githubLink = screen.getByRole('link', { name: /github/i })
    expect(githubLink).toHaveAttribute('href', GITHUB_HREF)
  })
})
