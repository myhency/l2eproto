import { createSlice } from '@reduxjs/toolkit';
import { IUserReducer } from '../interfaces';
import { fetchUserByIdAction, updateUserEarnByIdAction } from 'redux/actions/user/earn';

const initialState: IUserReducer = {
  user: null,
  pending: false,
  rejected: false,
  rejectedMessage: '',
};

export const userSlice = createSlice({
  initialState,
  name: 'user',
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchUserByIdAction.pending, (state) => {
        state.pending = true;
      })
      .addCase(fetchUserByIdAction.fulfilled, (state, action) => {
        state.pending = false;
        state.user = action.payload;
      })
      .addCase(fetchUserByIdAction.rejected, (state, action) => {
        state.pending = false;
        state.rejected = true;
        state.rejectedMessage = action.error.message ?? '';
      })
      .addCase(updateUserEarnByIdAction.pending, (state) => {
        state.pending = true;
      })
      .addCase(updateUserEarnByIdAction.fulfilled, (state, action) => {
        state.pending = false;
        state.user = action.payload;
      })
      .addCase(updateUserEarnByIdAction.rejected, (state, action) => {
        state.pending = false;
        state.rejected = true;
        state.rejectedMessage = action.error.message ?? '';
      })
      .addDefaultCase((state) => state),
});

export default userSlice;
