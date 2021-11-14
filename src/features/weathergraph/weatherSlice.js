import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data : [],
}

export const weatherSlice = createSlice({
    name : 'weather',
    initialState,
    reducers: {
        addCityData: (state, action) => {
            console.log(action.payload)
            state.data.unshift(action.payload)
        },
    },

})

export const { addCityData } = weatherSlice.actions

export default weatherSlice.reducer
