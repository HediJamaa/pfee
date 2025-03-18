import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

export const getAnimal = createAsyncThunk("animal/get", async () => {
    try {
        let result = axios.get("http://localhost:5000/animal/")
        console.log("Response:", result);
        return result
    } catch (error) {
        console.log(error)
    }
})
export const addAnimal = createAsyncThunk("animal/add", async (newAnimal) => {
    try {
        let result = axios.post("http://localhost:5000/animal/add", newAnimal)
        console.log("Response:", result);
        return result
    } catch (error) {
        console.log(error)
    }
})

export const deleteAnimal = createAsyncThunk("animal/delete", async(id) => {
    try {
        let result = axios.delete(`http://localhost:5000/animal/${id}`)
        console.log("Response:", result);
        return result
    } catch (error) {
        console.log(error)
    }
})
export const editAnimal = createAsyncThunk("animal/edit", async({id, edited}) => {
    try {
        let result = axios.put(`http://localhost:5000/animal/${id}`, edited)
        console.log("Response:", result);
        return result
    } catch (error) {
        console.log(error)
    }
})

const initialState = {
    animalList: [],
    status: null
}

export const animalSlice = createSlice({
    name: 'animal',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAnimal.pending, (state) => {
                state.status = "pending";
            })
            .addCase(getAnimal.fulfilled, (state, action) => {
                state.status = "success";
                state.animalList = action.payload.data.animals;
            })
            .addCase(getAnimal.rejected, (state) => {
                state.status = "fail";
            })
            .addCase(addAnimal.pending, (state) => {
                state.status = "pending";
            })
            .addCase(addAnimal.fulfilled, (state) => {
                state.status = "success";
            })
            .addCase(addAnimal.rejected, (state) => {
                state.status = "fail";
            })
            .addCase(deleteAnimal.pending, (state) => {
                state.status = "pending";
            })
            .addCase(deleteAnimal.fulfilled, (state) => {
                state.status = "success";
            })
            .addCase(deleteAnimal.rejected, (state) => {
                state.status = "fail";
            })
            .addCase(editAnimal.pending, (state) => {
                state.status = "pending";
            })
            .addCase(editAnimal.fulfilled, (state) => {
                state.status = "success";
            })
            .addCase(editAnimal.rejected, (state) => {
                state.status = "fail";
            })
    },
})

// Action creators are generated for each case reducer function
export const { } = animalSlice.actions

export default animalSlice.reducer
