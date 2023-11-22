import { createSlice } from '@reduxjs/toolkit';

const userSlicer = createSlice({
  name: 'user',
  initialState: {
    loading: false,
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setLoading } = userSlicer.actions;
export default userSlicer.reducer;
