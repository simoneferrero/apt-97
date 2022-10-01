import classNames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/router'

const GITHUB_EDIT_PATH = 'https://github.com/simoneferrero/apt-97/edit/main/'

const buttonStyles = classNames(
  'bg-theme',
  'border-2',
  'border-theme',
  'bottom-4',
  'fixed',
  'flex',
  'font-body',
  'font-bold',
  'h-14',
  'hover:shadow-md',
  'items-center',
  'justify-center',
  'right-4',
  'md:text-base',
  'rounded-full',
  'text-background',
  'text-sm',
  'w-14',
)

const EditButton = () => {
  const { asPath } = useRouter()
  const linkHref = GITHUB_EDIT_PATH + asPath.replace(/\//, '_') + '.md'

  return (
    <a
      aria-label="Edit Page"
      className={buttonStyles}
      href={linkHref}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={faEdit} className="fa-lg" />
    </a>
  )
}

export default EditButton
