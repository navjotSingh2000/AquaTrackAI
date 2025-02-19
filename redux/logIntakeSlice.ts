import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LogIntakeProps } from "@/types/logIntake";
import moment from "moment";

const initialState: LogIntakeProps = {
  datetime: moment().format("YYYY-MM-DD HH:mm:ss"),
  waterIntake: 0,
};

const logIntakeSlice = createSlice({
  name: "logIntake",
  initialState,
  reducers: {
    logIntake: <T extends keyof LogIntakeProps>(
      state: LogIntakeProps,
      action: PayloadAction<{ key: T; value: LogIntakeProps[T] }>
    ) => {
      state[action.payload.key] = action.payload.value;
    },
  },
});

export const { logIntake } = logIntakeSlice.actions;
export default logIntakeSlice.reducer;
