import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    // formdata: [], //for array
    formdata: {},
};

const formSlice = createSlice({
    name: "formdata",
    initialState,
    reducers: {
        setFormData: (state, action) => {
            // state.formdata.push(action.payload); //for array
            state.formdata = action.payload;
        },
    },
});

export const { setFormData } = formSlice.actions;
export default formSlice.reducer;
