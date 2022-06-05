import { configureStore } from "@reduxjs/toolkit";
import developersSlice from "./developers/developersSlice";
import settingsSlice from "./settings/settingsSlice";

export const store = configureStore({
  reducer: {
    developers: developersSlice,
    settings: settingsSlice,
  },
});
