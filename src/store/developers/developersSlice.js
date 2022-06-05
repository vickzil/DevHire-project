import { createSlice } from "@reduxjs/toolkit";

import { getAllDevelopers } from "./actions";

const initialState = {
  developers: null,
  favourites: [],
  loading: true,
  error: false,
};

const developerSlice = createSlice({
  name: "developers",
  initialState,
  reducers: {
    setFavourities: (state, { payload }) => {
      state.favourites = payload;
    },
  },

  extraReducers: {
    [getAllDevelopers.pending]: (state) => {
      state.loading = true;
    },

    [getAllDevelopers.fulfilled]: (state, action) => {
      state.developers = action.payload.data?.service_search_results.hits;
      state.error = false;
      state.loading = false;
    },

    [getAllDevelopers.rejected]: (state, action) => {
      state.error = true;
      state.loading = false;
    },
  },
});

export const { setFavourities } = developerSlice.actions;
export default developerSlice.reducer;
