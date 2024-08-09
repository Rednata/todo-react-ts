import { createSlice } from '@reduxjs/toolkit'
import { themes } from '../styles/themes'
import { Theme } from '../models/theme'

export interface ThemeState {
  theme: Theme
}

const initialState: ThemeState = {
  theme: themes['light'],
}

export const themeSlice = createSlice({
  name: 'themeList',
  initialState,
  reducers: {
    toggleThemeAction: (state) => {
      state.theme = state.theme.name === 'light' ? themes['dark'] : themes['light']
    },
  },
})

// Action creators are generated for each case reducer function
export const { toggleThemeAction } = themeSlice.actions

export default themeSlice.reducer