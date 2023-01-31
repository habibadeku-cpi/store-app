import { configureStore, createSlice } from "@reduxjs/toolkit";

export interface IMyNumber {
    value: number;
    keepPrevious: number;
}
const firstAppSlice = createSlice({
    name: 'firstAppSlice',
    initialState: { value: 0, keepPrevious: 0 },
    reducers: {
        increment: (state)=>{
            state.keepPrevious = state.value;
            state.value++;
            return state;
        },
        decrement: (state)=>{
            state.keepPrevious = state.value;
            state.value--;
            return state;
        },
    }
});

const storeApp = configureStore({
    reducer: firstAppSlice.reducer
});

export const actions = firstAppSlice.actions;

export default storeApp;

export type RootState = ReturnType<typeof storeApp.getState>;
