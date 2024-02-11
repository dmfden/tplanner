import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export enum TprojectColors {
    green = 'green',
    red = 'red',
    blue = 'blue'
}

export interface Iproject {
    id: string,
    name: string,
    color: TprojectColors,
}


const initialState: Iproject[] = [];

export const projectSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {
        addProject: (state, action: PayloadAction<Iproject>)=> {
            state.push(action.payload);
        },
        removeProject: (state, action: PayloadAction<string>)=> {
            state.filter(el=>el.id !== action.payload);
        }
    }
});

export const {addProject, removeProject} = projectSlice.actions;
export default projectSlice.reducer;