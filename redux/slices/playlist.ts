import { createSlice } from '@reduxjs/toolkit';
import { IPlaylistReducer } from '../interfaces';
import { fetchPlaylistAction, fetchPlaylistsAction } from '../actions/playlist';

const initialState: IPlaylistReducer = {
  playlists: [],
  playlist: null,
  pending: false,
  rejected: false,
  rejectedMessage: '',
};

export const playlistSlice = createSlice({
  initialState,
  name: 'playlist',
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchPlaylistsAction.pending, (state) => {
        state.pending = true;
      })
      .addCase(fetchPlaylistsAction.fulfilled, (state, action) => {
        state.pending = false;
        state.playlists = action.payload;
      })
      .addCase(fetchPlaylistsAction.rejected, (state, action) => {
        state.pending = false;
        state.rejected = true;
        state.rejectedMessage = action.error.message ?? '';
      })
      .addCase(fetchPlaylistAction.pending, (state) => {
        state.pending = true;
      })
      .addCase(fetchPlaylistAction.fulfilled, (state, action) => {
        state.pending = false;
        state.playlist = action.payload;
      })
      .addCase(fetchPlaylistAction.rejected, (state, action) => {
        state.pending = false;
        state.rejected = true;
        state.rejectedMessage = action.error.message ?? '';
      })
      .addDefaultCase((state) => state),
});

export default playlistSlice;
