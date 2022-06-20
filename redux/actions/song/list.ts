import { createAsyncThunk } from '@reduxjs/toolkit';

import { ISong } from '../../interfaces';

const songs = [
  {
    id: '#245342',
    playlistId: '1',
    artistProfilePicture: '/images/pfp-1.png',
    artistProfileBigPicture: '/images/pfp-big-1.png',
    url: 'https://www.youtube.com/watch?v=E6rFkadHXN4',
    name: 'Alcohol Free',
    artist: 'Pinballhead',
    playDuration: '03:38',
  },
  {
    id: '#245342',
    playlistId: '1',
    artistProfilePicture: '/images/pfp-1.png',
    artistProfileBigPicture: '/images/pfp-big-1.png',
    url: 'https://www.youtube.com/watch?v=CM4CkVFmTds',
    name: "I Can't Stop Me",
    artist: 'Pinballhead',
    playDuration: '03:40',
  },
  {
    id: '#245342',
    playlistId: '1',
    artistProfilePicture: '/images/pfp-1.png',
    artistProfileBigPicture: '/images/pfp-big-1.png',
    url: 'https://www.youtube.com/watch?v=ePpPVE-GGJw',
    name: 'TT',
    artist: 'Pinballhead',
    playDuration: '02:32',
  },
  {
    id: '#245342',
    playlistId: '1',
    artistProfilePicture: '/images/pfp-1.png',
    artistProfileBigPicture: '/images/pfp-big-1.png',
    url: 'https://www.youtube.com/watch?v=vPwaXytZcgI',
    name: 'Scientist',
    artist: 'Pinballhead',
    playDuration: '03:20',
  },
  {
    id: '#245342',
    playlistId: '1',
    artistProfilePicture: '/images/pfp-1.png',
    artistProfileBigPicture: '/images/pfp-big-1.png',
    url: 'https://www.youtube.com/watch?v=rRzxEiBLQCA',
    name: 'Heart Shaker',
    artist: 'Pinballhead',
    playDuration: '03:12',
  },
];

const TimeSleep = (time = 0) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

export const fetchSongsByPlaylistIdAction = createAsyncThunk(
  'song/fetchSongsByPlaylistId',
  async (playlistId: string): Promise<Array<ISong>> => {
    await TimeSleep(0);

    return songs.filter((v) => v.playlistId === playlistId);
  }
);
