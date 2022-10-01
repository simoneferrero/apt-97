import classNames from 'classnames'

const LINKEDIN_HREF = 'https://linkedin.com/in/simoneferrero/'
const GITHUB_HREF = 'https://github.com/simoneferrero/apt-97/'

const footerStyles = classNames(
  'text-center',
  'py-7',
  'px-12',
  'font-body',
  'text-sm',
  'text-theme',
  'w-full',
)
const linkStyles = classNames('underline', 'font-bold')

const Footer = () => (
  <footer className={footerStyles}>
    <span>
      Developed by{' '}
      <a
        className={linkStyles}
        href={LINKEDIN_HREF}
        target="_blank"
        rel="noopener noreferrer"
      >
        Simone
      </a>
      .
    </span>{' '}
    <span>
      Source code available on{' '}
      <a
        className={linkStyles}
        href={GITHUB_HREF}
        target="_blank"
        rel="noopener noreferrer"
      >
        Github
      </a>
      .
    </span>
  </footer>
)

export default Footer
