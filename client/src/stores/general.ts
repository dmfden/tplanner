import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./counter.Reducer";
import { projectSlice } from "./projects.Reducer";
import { projSlice } from "./proj.Reducer";
import { api } from "./api/api";


export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        projects: projectSlice.reducer,
        proj: projSlice.reducer,
        [api.reducerPath]: api.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;