import { createSlice } from "@reduxjs/toolkit";
import { getResources } from "./actions";

const initialState = {
  pageTitle: "",
  showMobileMenu: false,
  baseUrL: process.env.REACT_APP_BASEURL || "https://api.terawork.com",
  resources: null,
  loading: true,
  error: false,
  selectedCurrency: null,
  currencies: null,
  currencyPopUp: false,
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setPageTitle: (state, { payload }) => {
      state.pageTitle = payload;
      document.querySelector(".content-wrapper") &&
        document.querySelector(".content-wrapper").scrollTo(0, 0);
    },

    setShowMobileMenu: (state, { payload }) => {
      state.showMobileMenu = payload;
    },

    setSelectedCurrency: (state, { payload }) => {
      state.selectedCurrency = payload;
    },

    setCurrencyPopUp: (state, { payload }) => {
      state.currencyPopUp = payload;
    },
  },

  extraReducers: {
    [getResources.pending]: (state) => {
      state.loading = true;
    },

    [getResources.fulfilled]: (state, action) => {
      state.resources = action.payload.data;
      state.selectedCurrency = action.payload.data?.currencies[0];
      state.currencies = action.payload.data?.currencies;
      state.error = false;
      state.loading = false;
    },

    [getResources.rejected]: (state, action) => {
      state.error = true;
      state.loading = false;
    },
  },
});

export const {
  setPageTitle,
  setShowMobileMenu,
  setCurrencyPopUp,
  setSelectedCurrency,
} = settingsSlice.actions;
export default settingsSlice.reducer;
