import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    incrementByTen: (state) => {
      state.value += 10;
    },
    decrementByTen: (state) => {
      state.value -= 10;
    }
  }
});

export const { incrementByTen, decrementByTen } = counterSlice.actions;
export default counterSlice.reducer;
