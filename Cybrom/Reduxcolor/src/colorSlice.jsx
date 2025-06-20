import { createSlice } from "@reduxjs/toolkit";

const colorSlice = createSlice({
  name: "mycolor",
  initialState: {
    color:"red",
  },
  reducers: {
     bgcolorChange:(state) => {
      state.color="green"
    
  }
}
});

export const { bgcolorChange } = colorSlice.actions;

export default colorSlice.reducer;
