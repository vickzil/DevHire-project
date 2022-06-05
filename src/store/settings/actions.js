import { createAsyncThunk } from "@reduxjs/toolkit";

export const getResources = createAsyncThunk(
  "resources/getResources",
  async (payload, { getState }) => {
    const baseUrl = getState().settings.baseUrL;
    const response = await fetch(`${baseUrl}/resources`);

    return await response.json();
  }
);
