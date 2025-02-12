import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Attributes } from "@/types/attributes";

const initialState: Attributes = {
  weight: 70,
  exerciseTimeInMins: 60,
  hotWeather: true,
  highSodiumOrProteinDiet: false,
};

const attributesSlice = createSlice({
  name: "attributes",
  initialState,
  reducers: {
    setAttribute: <T extends keyof Attributes>(
      state: Attributes,
      action: PayloadAction<{ key: T; value: Attributes[T] }>
    ) => {
      state[action.payload.key] = action.payload.value;
    },
  },
});

export const { setAttribute } = attributesSlice.actions;
export default attributesSlice.reducer;
