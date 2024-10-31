import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
    name: "feed",
    initialState: null,
    reducers: {
        addFeed: (state,action) => {
            return action.payload;
        },
        removeUserFromFeed: (state,action) => {
            // Removing the person from feed collection
           const newArray = state.filter((user) => user._id !== action.payload);
           return newArray;
        },
    },
});

export const {addFeed,removeUserFromFeed} = feedSlice.actions;
export default feedSlice.reducer;