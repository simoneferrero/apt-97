import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import type { TagsType, SetTagsType } from '../../types/tags'
import classNames from 'classnames'
import TagButton from './TagButton'
import ToggleModalButton from './ToggleModalButton'

type Props = { tags: TagsType; setTags: SetTagsType }

const backgroundStyles = classNames(
  'bg-gray-500',
  'bg-opacity-75',
  'fixed',
  'inset-0',
  'transition-opacity',
)
const modalWrapperStyles = classNames(
  'fixed',
  'inset-0',
  'overflow-y-auto',
  'z-40',
)
const modalContainerStyles = classNames(
  'flex',
  'items-end',
  'justify-center',
  'min-h-full',
  'p-4',
  'sm:items-center',
  'sm:p-0',
  'text-center',
)
const modalPanelStyles = classNames(
  'bg-white',
  'overflow-hidden',
  'relative',
  'rounded-lg',
  'shadow-xl',
  'sm:max-w-lg',
  'sm:my-8',
  'sm:w-full',
  'text-left',
  'transform',
  'transition-all',
)
const modalContentWrapperStyles = classNames(
  'bg-white',
  'px-4',
  'pt-5',
  'pb-4',
  'sm:p-6',
  'sm:pb-4',
)
const modalContentContainerStyles = classNames(
  'sm:flex',
  'sm:items-start',
  'w-full',
)
const modalContentStyles = classNames('sm:text-left', 'text-center', 'w-full')
const modalTitleStyles = classNames(
  'font-bold',
  'font-body',
  'text-center',
  'text-theme',
  'text-lg',
)
const modalTagsContainerStyles = classNames(
  'flex-wrap',
  'flex',
  'gap-2',
  'overflow-y-auto',
  'pt-6',
  'w-full',
)
const modalFooterStyles = classNames(
  'bg-gray-100',
  'gap-4',
  'grid-cols-2',
  'grid',
  'justify-between',
  'md:flex',
  'px-4',
  'py-3',
  'sm:px-6',
)
const buttonStyles = (isSelectAll: boolean) =>
  classNames(
    'border-2',
    'border-theme',
    'focus:outline-none',
    'focus:ring-1',
    'focus:ring-theme',
    'font-body',
    'font-bold',
    'hover:shadow-md',
    'md:text-base',
    'px-3',
    'py-2',
    'rounded-lg',
    'text-sm',
    isSelectAll ? 'bg-theme' : 'bg-background',
    isSelectAll ? 'text-background' : 'text-theme',
  )

export default function Modal({ tags, setTags }: Props) {
  const [open, setOpen] = useState(false)

  const cancelButtonRef = useRef(null)

  const handleClickTag = (label: string) =>
    setTags((prevTags) => ({ ...prevTags, [label]: !prevTags[label] }))

  const resetTags = () =>
    setTags((prevTags) =>
      Object.keys(prevTags).reduce(
        (allTags, tag) => ({ ...allTags, [tag]: false }),
        {},
      ),
    )

  return (
    <>
      <ToggleModalButton setOpen={setOpen} />
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-40"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className={backgroundStyles} />
          </Transition.Child>

          <div className={modalWrapperStyles}>
            <div className={modalContainerStyles}>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className={modalPanelStyles}>
                  <div className={modalContentWrapperStyles}>
                    <div className={modalContentContainerStyles}>
                      <div className={modalContentStyles}>
                        <Dialog.Title as="h3" className={modalTitleStyles}>
                          SELECT YOUR FILTERS
                        </Dialog.Title>
                        <div className={modalTagsContainerStyles}>
                          {Object.entries(tags)
                            .sort()
                            .map(([key, value]) => (
                              <TagButton
                                key={key}
                                label={key}
                                isActive={value}
                                setIsActive={handleClickTag}
                              />
                            ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={modalFooterStyles}>
                    <button
                      type="button"
                      className={buttonStyles(false)}
                      onClick={() => resetTags()}
                      ref={cancelButtonRef}
                    >
                      RESET
                    </button>
                    <button
                      type="button"
                      className={buttonStyles(true)}
                      onClick={() => setOpen(false)}
                      ref={cancelButtonRef}
                    >
                      APPLY
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  )
}
