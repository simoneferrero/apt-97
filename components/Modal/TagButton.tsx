import classNames from 'classnames'

type ButtonProps = {
  label: string
  isActive: boolean
  setIsActive: (label: string) => void
}

const buttonStyles = (isActive: boolean) =>
  classNames(
    'border-2',
    'border-theme',
    'flex-auto',
    'focus:outline-none',
    'focus:ring-1',
    'focus:ring-theme',
    'font-cursive',
    'hover:shadow-md',
    'items-center',
    'leading-loose',
    'md:text-xl',
    'px-3',
    'py-2',
    'rounded-lg',
    'text-lg',
    isActive ? 'bg-theme' : 'bg-background',
    isActive ? 'text-background' : 'text-theme',
  )
const TagButton = ({ label, isActive, setIsActive }: ButtonProps) => {
  return (
    <button
      type="button"
      className={buttonStyles(isActive)}
      onClick={() => setIsActive(label)}
    >
      <span>{label}</span>
    </button>
  )
}

export default TagButton
