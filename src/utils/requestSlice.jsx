import { createSlice } from "@reduxjs/toolkit"

const requestSlice = createSlice({
    name: "requests",
    initialState: null,
    reducers: {
        addRequests: (state,action) => action.payload,
        removeRequests: (state,action) => {
            // Filter the current state and check each request in thge state, those which passes the condition will be filtered and stored in newArray variable. 
            const newArray = state.filter((r) => r._id !== action.payload);
            return newArray;
        },

    },
});

export const { addRequests, removeRequests} = requestSlice.actions;
export default requestSlice.reducer;