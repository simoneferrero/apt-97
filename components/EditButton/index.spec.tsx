import { render, screen } from '@testing-library/react'
import mockRouter from 'next-router-mock'
import EditButton, { GITHUB_EDIT_PATH } from '.'

describe('EditButton', () => {
  beforeEach(() => {
    mockRouter.setCurrentUrl('/food/test-recipe')
  })

  it('should render correctly', () => {
    render(<EditButton />)

    const githubEditPageLink = screen.getByRole('link', { name: /edit page/i })
    expect(githubEditPageLink).toHaveAttribute(
      'href',
      GITHUB_EDIT_PATH + '_food/test-recipe.md',
    )
  })
})
