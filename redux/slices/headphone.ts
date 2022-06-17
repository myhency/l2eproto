import { createSlice } from '@reduxjs/toolkit';
import { IHeadphoneReducer } from '../interfaces';
import { fetchHeadphonesAction } from '../actions/headphone';

const initialState: IHeadphoneReducer = {
  headphones: [],
  pending: false,
  rejected: false,
  rejectedMessage: '',
};

export const headphoneSlice = createSlice({
  initialState,
  name: 'headphone',
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchHeadphonesAction.pending, (state) => {
        state.pending = true;
      })
      .addCase(fetchHeadphonesAction.fulfilled, (state, action) => {
        state.pending = false;
        state.headphones = action.payload;
      })
      .addCase(fetchHeadphonesAction.rejected, (state, action) => {
        state.pending = false;
        state.rejected = true;
        state.rejectedMessage = action.error.message ?? '';
      })
      .addDefaultCase((state) => state),
});

export default headphoneSlice;
