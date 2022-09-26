import classNames from 'classnames'

type ButtonProps = {
  label: string
  isActive: boolean
  setIsActive: (label: string) => void
}

const TagButton = ({ label, isActive, setIsActive }: ButtonProps) => {
  const buttonClassName = classNames(
    'border-2',
    'border-theme',
    'flex-auto',
    'focus:outline-none',
    'focus:ring-1',
    'focus:ring-theme',
    'leading-loose',
    'font-cursive',
    'hover:shadow-md',
    'md:text-xl',
    'px-3',
    'py-2',
    'rounded-lg',
    'text-lg',
    isActive ? 'bg-theme' : 'bg-background',
    isActive ? 'text-background' : 'text-theme',
  )
  return (
    <button
      type="button"
      className={buttonClassName}
      onClick={() => setIsActive(label)}
    >
      {label}
    </button>
  )
}

export default TagButton
