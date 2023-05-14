    import { createSlice } from '@reduxjs/toolkit';

    const filterSlice = createSlice({
    name: 'filter',
    initialState: '',
    reducers: {
        queryFilter(state, action) {
        return (state = action.payload.toLowerCase());
        },
    },
    });

    export const { queryFilter } = filterSlice.actions;
    export const filterReducer = filterSlice.reducer;