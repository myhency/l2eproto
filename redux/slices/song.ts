import { createSlice } from '@reduxjs/toolkit';
import { ISongReducer } from '../interfaces';
import { fetchSongsByPlaylistIdAction } from 'redux/actions/song/list';

const initialState: ISongReducer = {
  songs: [],
  pending: false,
  rejected: false,
  rejectedMessage: '',
};

export const songSlice = createSlice({
  initialState,
  name: 'song',
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchSongsByPlaylistIdAction.pending, (state) => {
        state.pending = true;
      })
      .addCase(fetchSongsByPlaylistIdAction.fulfilled, (state, action) => {
        state.pending = false;
        state.songs = action.payload;
      })
      .addCase(fetchSongsByPlaylistIdAction.rejected, (state, action) => {
        state.pending = false;
        state.rejected = true;
        state.rejectedMessage = action.error.message ?? '';
      })
      .addDefaultCase((state) => state),
});

export default songSlice;
