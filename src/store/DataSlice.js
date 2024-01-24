import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
    name: "data",
    initialState: {
        data: [],
    },
    reducers: {
        setData: (state, action) => {
            state.data = action.payload
        },
        addData: (state, action) => {
            state.data = [...state.data, action.payload];
        },
        deleteData: (state, action) => {
            state.data = state.data.filter((data) => data.id !== action.payload );
        },
        updateData: (state, action) => {
            state.data = state.data.map((data) => {
                if (data.id === action.payload.id) {
                    return {
                        firstName: action.payload.firstName,
                        lastName: action.payload.lastName,
                        age: action.payload.age,
                        address: action.payload.address,
                        email: action.payload.email,
                        id: action.payload.id
                    }
                }
                return data;
            })
        }
    }
});

export const { setData } = dataSlice.actions;
export const { addData } = dataSlice.actions;
export const { deleteData } = dataSlice.actions;
export const { updateData } = dataSlice.actions;
export default dataSlice.reducer;