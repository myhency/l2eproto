import { createAsyncThunk } from '@reduxjs/toolkit';

import { ISong } from '../../interfaces';

const songs = [
  {
    id: '#245342',
    playlistId: '1',
    artistProfilePicture: '/images/pfp-1.png',
    name: 'Purple Drink',
    artist: 'Pinballhead',
    playDuration: '02:32',
  },
  {
    id: '#245342',
    playlistId: '1',
    artistProfilePicture: '/images/pfp-1.png',
    name: 'Purple Drink',
    artist: 'Pinballhead',
    playDuration: '02:32',
  },
  {
    id: '#245342',
    playlistId: '1',
    artistProfilePicture: '/images/pfp-1.png',
    name: 'Purple Drink',
    artist: 'Pinballhead',
    playDuration: '02:32',
  },
  {
    id: '#245342',
    playlistId: '1',
    artistProfilePicture: '/images/pfp-1.png',
    name: 'Purple Drink',
    artist: 'Pinballhead',
    playDuration: '02:32',
  },
  {
    id: '#245342',
    playlistId: '1',
    artistProfilePicture: '/images/pfp-1.png',
    name: 'Purple Drink',
    artist: 'Pinballhead',
    playDuration: '02:32',
  },
  {
    id: '#245342',
    playlistId: '1',
    artistProfilePicture: '/images/pfp-1.png',
    name: 'Purple Drink',
    artist: 'Pinballhead',
    playDuration: '02:32',
  },
  {
    id: '#245342',
    playlistId: '1',
    artistProfilePicture: '/images/pfp-1.png',
    name: 'Purple Drink',
    artist: 'Pinballhead',
    playDuration: '02:32',
  },
  {
    id: '#245342',
    playlistId: '1',
    artistProfilePicture: '/images/pfp-1.png',
    name: 'Purple Drink',
    artist: 'Pinballhead',
    playDuration: '02:32',
  },
  {
    id: '#245342',
    playlistId: '1',
    artistProfilePicture: '/images/pfp-1.png',
    name: 'Purple Drink',
    artist: 'Pinballhead',
    playDuration: '02:32',
  },
  {
    id: '#245342',
    playlistId: '1',
    artistProfilePicture: '/images/pfp-1.png',
    name: 'Purple Drink',
    artist: 'Pinballhead',
    playDuration: '02:32',
  },
  {
    id: '#245342',
    playlistId: '1',
    artistProfilePicture: '/images/pfp-1.png',
    name: 'Purple Drink',
    artist: 'Pinballhead',
    playDuration: '02:32',
  },
  {
    id: '#245342',
    playlistId: '1',
    artistProfilePicture: '/images/pfp-1.png',
    name: 'Purple Drink',
    artist: 'Pinballhead',
    playDuration: '02:32',
  },
  
];

const TimeSleep = (time = 0) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

export const fetchSongsByPlaylistIdAction = createAsyncThunk('song/fetchSongsByPlaylistId', async (playlistId: string): Promise<Array<ISong>> => {
  await TimeSleep(0);

  return songs.filter((v) => v.playlistId === playlistId);
});
