import type { Dispatch, SetStateAction } from 'react'
import classNames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/free-solid-svg-icons'

type Props = {
  setOpen: Dispatch<SetStateAction<boolean>>
}

const buttonStyles = classNames(
  'bg-theme',
  'border-2',
  'border-theme',
  'bottom-8',
  'fixed',
  'flex',
  'focus:outline-none',
  'focus:ring-1',
  'focus:ring-theme',
  'font-body',
  'font-bold',
  'h-14',
  'hover:shadow-md',
  'items-center',
  'justify-center',
  'left-8',
  'md:text-base',
  'rounded-full',
  'text-background',
  'text-sm',
  'w-14',
)

const ToggleModalButton = ({ setOpen }: Props) => (
  <button
    aria-label="Toggle Filters"
    type="button"
    className={buttonStyles}
    onClick={() => setOpen((prevValue) => !prevValue)}
  >
    <FontAwesomeIcon icon={faFilter} className="fa-lg" />
  </button>
)

export default ToggleModalButton
