import '@testing-library/jest-dom/extend-expect'

jest.mock('next/router', () => require('next-router-mock'))

beforeEach(() => {
  const mockIntersectionObserver = jest.fn()
  mockIntersectionObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null,
  })
  window.IntersectionObserver = mockIntersectionObserver
})
