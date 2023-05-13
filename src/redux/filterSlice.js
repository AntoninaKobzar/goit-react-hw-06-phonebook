import { createSlice } from '@reduxjs/toolkit';
// import { statusFilters } from './constants';

// const filtersInitialState = {
//     status: statusFilters.all,
// };

const filterSlice = createSlice({
    name: "filter",
    initialState: '',
    reducers: {
        setFilter(state, action) {
            return (state = action.payload.toLowerCase());
        },
    },
});
export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;