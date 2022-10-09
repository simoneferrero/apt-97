import React, { createContext, useContext } from 'react'

import type { TagsContextType } from '../types/tags'

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
