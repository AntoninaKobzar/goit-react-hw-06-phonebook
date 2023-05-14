// import { configureStore } from "@reduxjs/toolkit";
// import { contactsReducer } from "../redux/contactsSlice";
// import { filterReducer  } from "../redux/filterSlice";
import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';


const initialState = {
    contacts: [],
    filter: "",
};

const enhancer = devToolsEnhancer();
const rootReducer = (state = initialState, action) => {
    return state;
}

export const store = createStore(rootReducer,enhancer);


