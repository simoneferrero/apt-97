import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
} from 'react'

export type TagsType = { [key: string]: boolean }
export type SetTagsType = Dispatch<SetStateAction<TagsType>>
export type TagsContextType = {
  foodTags: TagsType
  drinksTags: TagsType
  setFoodTags: SetTagsType
  setDrinksTags: SetTagsType
}

export const defaultTagsContext: TagsContextType = {
  foodTags: {},
  drinksTags: {},
  setFoodTags: () => {},
  setDrinksTags: () => {},
}

const TagsContext = createContext<TagsContextType>(defaultTagsContext)

export const TagsProvider = ({
  value,
  children,
}: {
  value: TagsContextType
  children: React.ReactNode
}) => <TagsContext.Provider value={value}>{children}</TagsContext.Provider>

export const useTagsContext = () => useContext(TagsContext)
