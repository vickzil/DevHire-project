import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllDevelopers = createAsyncThunk(
  "developers/getAllDevelopers",
  async (payload, { getState }) => {
    const baseUrl = getState().settings.baseUrL;
    const response = await fetch(
      `${baseUrl}/service-categories/sellers-services/computer-software-development`
    );

    return await response.json();
  }
);
