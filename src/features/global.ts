import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../app/store'

interface globalState {
  activeMenu: string
}

const initialState: globalState = {
  activeMenu: 'HOME',
}

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setActiveMenu: (state, action: PayloadAction<string>) => {
      state.activeMenu = action.payload
    },
  },
})

export const { setActiveMenu } = globalSlice.actions

export const selectActiveMenu = (state: RootState) => state.global.activeMenu

export default globalSlice.reducer