import { createSlice } from '@reduxjs/toolkit'
import { en } from './locales/en/common'
import { ru } from './locales/ru/common'
const initialState = {
    value: en,
    lang: 'en',
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        toRus: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            // state.value += 1
            state.value = ru
            state.lang = "ru"
        },
        toEng: (state) => {
            state.value = en
            state.lang = "en"
            // state.value -= 1
        },
    },
})

// Action creators are generated for each case reducer function
export const { toRus, toEng } = counterSlice.actions

export default counterSlice.reducer