import { createStore } from "redux";
import {configureStore, createSlice} from '@reduxjs/toolkit';


const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
    name: 'counterxyz', //can give any name
    initialState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        incrementBy5(state, action) {
            state.counter = state.counter+ action.payload;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        },
    } 
})

// -------------------------------------------------------------
// Core way to implement reducers in Redux

// const creeateReducer = (state = initialState, action) => {
//   if (action.type === "increment") {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "incrementBy5") {
//     return {
//       counter: state.counter + action.value,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "toggleCounter") {
//     return {
//       showCounter: !state.showCounter,
//       counter: state.counter,
//     };
//   }

//   return state;
// };
// -------------------------------------------------------------
const store = configureStore( {reducer : counterSlice.reducer} );
export const counterActions = counterSlice.actions; 
//now we can access another files these actions..

export default store;
