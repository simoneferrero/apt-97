import React, { Dispatch, SetStateAction } from 'react'

export type TagsType = { [key: string]: boolean }

export type SetTagsType = Dispatch<SetStateAction<TagsType>>

export type TagsContextType = {
  foodTags: TagsType
  drinksTags: TagsType
  setFoodTags: SetTagsType
  setDrinksTags: SetTagsType
}
