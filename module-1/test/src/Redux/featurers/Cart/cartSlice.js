import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    calc: 0
}
const cartSlice = createSlice({
    name: "calc",
    initialState,
    reducers: {
        inc: (state) => {
            state.calc += 1
        },
        dec: (state) => {
            state.calc -= 1
        },
        incByValue: (state, actions) => {
            state.calc = state.calc + actions.payload
        },
        decByValue: (state, actions) => {
            state.calc = state.calc - actions.payload;
        }
    },

})
export const { inc, dec, incByValue, decByValue } = cartSlice.actions
export default cartSlice.reducer;