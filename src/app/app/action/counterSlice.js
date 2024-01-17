import { createSlice } from '@reduxjs/toolkit'
import { en } from './locales/en/common'
import { ru } from './locales/ru/common'
const initialState = {
    value: en,
    lang: 'en',
}
const langs = {
    en: en,
    ru: ru
}
export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        toRus: (state) => {
            state.value = ru
            state.lang = "ru"
        },
        toEng: (state) => {
            state.value = en
            state.lang = "en"
        },
        unicalChange: (state, action) => {
            state.value = langs[action.payload]
            state.lang = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { toRus, toEng, unicalChange } = counterSlice.actions

export default counterSlice.reducer