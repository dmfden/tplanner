import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Iproject } from "../@types/Project";

export const getProjects = createAsyncThunk("projects/getProjects", async()=> {
        const response = await fetch("/mocks/data.projects.json");
        return response.json();
    });

export interface IApiErrors {
    isError: boolean,
    errorMessage: string
}

export interface IProjectState {
    projects: Iproject[];
    errors: IApiErrors;
    
}

const initialState: IProjectState = {
    projects: [],
    errors: {
        isError: false,
        errorMessage: '',
    }
}

export const projectSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {
        addProject: (state, action: PayloadAction<Iproject>)=> {
            state.projects.push(action.payload);
        },
        removeProject: (state, action: PayloadAction<string>)=> {
            state.projects.filter(el=>el.id !== action.payload);
        }
    },
    extraReducers: (builder)=> {
        builder.addCase(getProjects.fulfilled, (state, action)=> {
            state.projects = [...action.payload];
        });
        builder.addCase(getProjects.rejected, (state, action)=>{
            state.errors.isError = true;
            action.error.message ? state.errors.errorMessage = action.error.message : '';
        });
    },
});

export const {addProject, removeProject} = projectSlice.actions;
export default projectSlice.reducer;