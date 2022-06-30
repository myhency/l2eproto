import { createAsyncThunk } from '@reduxjs/toolkit';

import { IPlaylist } from '../../interfaces';

const playlist = [
  {
    id: '1',
    image: '/images/playlist/thumb-chill-house.png',
    name: 'Chill House',
    creator: 'LABEL MUSIC',
    numOfSongs: 42,
  },
  {
    id: '2',
    image: '/images/playlist/thumb-happy-hour.png',
    name: 'Happy Hour',
    creator: 'LABEL MUSIC',
    numOfSongs: 42,
  },
  {
    id: '3',
    image: '/images/playlist/thumb-headliners.png',
    name: 'Headliners',
    creator: 'LABEL MUSIC',
    numOfSongs: 42,
  },
  {
    id: '4',
    image: '/images/playlist/thumb-hip-hop.png',
    name: 'Hip-Hop/R&B Throwback',
    creator: 'LABEL MUSIC',
    numOfSongs: 42,
  },
  { id: '5', image: '/images/playlist/thumb-spa.png', name: 'Spa', creator: 'LABEL MUSIC', numOfSongs: 42 },
  {
    id: '6',
    image: '/images/playlist/thumb-start-of-the-weekend.png',
    name: 'Start Of The Weekend',
    creator: 'LABEL MUSIC',
    numOfSongs: 42,
  },
  {
    id: '7',
    image: '/images/playlist/thumb-summer-waves.png',
    name: 'Summer Waves',
    creator: 'LABEL MUSIC',
    numOfSongs: 42,
  },
  {
    id: '8',
    image: '/images/playlist/thumb-weekend-worthy.png',
    name: 'Weekend Worthy',
    creator: 'LABEL MUSIC',
    numOfSongs: 42,
  },
  {
    id: '9',
    image: '/images/playlist/thumb-chilled-out.png',
    name: 'Chilled Out',
    creator: 'LABEL MUSIC',
    numOfSongs: 42,
  },
  {
    id: '10',
    image: '/images/playlist/thumb-city-scape-groove.png',
    name: 'City Scape Groove',
    creator: 'LABEL MUSIC',
    numOfSongs: 42,
  },
  {
    id: '11',
    image: '/images/playlist/thumb-future-is-now.png',
    name: 'Future Is Now',
    creator: 'LABEL MUSIC',
    numOfSongs: 42,
  },
  {
    id: '12',
    image: '/images/playlist/thumb-old-school-vibes.png',
    name: 'Old School Vibes',
    creator: 'LABEL MUSIC',
    numOfSongs: 42,
  },
  {
    id: '13',
    image: '/images/playlist/thumb-sounds-of-today.png',
    name: 'Sounds of Today',
    creator: 'LABEL MUSIC',
    numOfSongs: 42,
  },
];

const TimeSleep = (time = 0) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

export const fetchPlaylistsAction = createAsyncThunk('playlist/fetchPlaylists', async (): Promise<Array<IPlaylist>> => {
  await TimeSleep(0);

  return playlist;
});

export const fetchPlaylistAction = createAsyncThunk(
  'playlist/fetchPlaylist',
  async (id: string): Promise<IPlaylist> => {
    await TimeSleep(0);

    const item = playlist.find((v) => v.id === id);
    return item;
  }
);
