import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react'
import user from '@testing-library/user-event'
import Modal from '.'

const mockTags = {
  vodka: false,
  gin: true,
}
const mockSetTags = jest.fn()

const toggleModal = async () => {
  const toggleButton = screen.getByLabelText(/toggle filters/i)

  await user.click(toggleButton)
}

describe('Modal', () => {
  beforeEach(() => {
    render(<Modal tags={mockTags} setTags={mockSetTags} />)
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should NOT render the modal when closed', () => {
    const toggleButton = screen.getByLabelText(/toggle filters/i)
    expect(toggleButton).toBeVisible()

    const modalTitle = screen.queryByText(/select your filters/i)
    expect(modalTitle).not.toBeInTheDocument()
  })

  it('should open the modal when the toggle button is clicked', async () => {
    await toggleModal()

    const modalTitle = await screen.findByText(/select your filters/i)
    expect(modalTitle).toBeVisible()

    const vodkaTagButton = await screen.findByRole('button', { name: /vodka/i })
    expect(vodkaTagButton).toHaveClass('bg-background', 'text-theme')
    expect(vodkaTagButton).not.toHaveClass('bg-theme', 'text-background')

    const ginTagButton = await screen.findByRole('button', { name: /gin/i })
    expect(ginTagButton).toHaveClass('bg-theme', 'text-background')
    expect(ginTagButton).not.toHaveClass('bg-background', 'text-theme')

    const resetButton = await screen.findByRole('button', { name: /reset/i })
    expect(resetButton).toBeVisible()

    const applyButton = await screen.findByRole('button', { name: /apply/i })
    expect(applyButton).toBeVisible()
  })

  it('should close the modal when the apply button is clicked', async () => {
    await toggleModal()

    const applyButton = await screen.findByRole('button', { name: /apply/i })
    user.click(applyButton)

    await waitForElementToBeRemoved(screen.queryByText(/select your filters/i))
  })

  it('should call `setTags` correctly when tags are clicked and reset', async () => {
    await toggleModal()

    const vodkaTagButton = await screen.findByRole('button', {
      name: /vodka/i,
    })
    await user.click(vodkaTagButton)

    expect(mockSetTags).toHaveBeenCalledTimes(1)

    const ginTagButton = await screen.findByRole('button', { name: /gin/i })
    await user.click(ginTagButton)

    expect(mockSetTags).toHaveBeenCalledTimes(2)

    const resetButton = await screen.findByRole('button', {
      name: /reset/i,
    })
    await user.click(resetButton)

    expect(mockSetTags).toHaveBeenCalledTimes(3)
  })
})
