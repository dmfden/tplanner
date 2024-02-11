import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./counter.Reducer";
import { projectSlice } from "./projects.Reducer";


export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        projects: projectSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;