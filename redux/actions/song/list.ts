import { createAsyncThunk } from '@reduxjs/toolkit';

import { ISong } from '../../interfaces';

const songs = [
  {
    id: '#245342',
    playlistId: '1',
    artistProfilePicture: '/images/pfp-1.png',
    artistProfileBigPicture: '/images/pfp-big-1.png',
    url: '/videos/1.Dont_have_a_let_go-1.mp3',
    videoUrl: '/videos/test.mp4',
    name: 'Dont have a let go',
    artist: 'Pinballhead',
    playDuration: '03:38',
  },
  {
    id: '#2442',
    playlistId: '1',
    artistProfilePicture: '/images/pfp-2.png',
    artistProfileBigPicture: '/images/pfp-big-2.png',
    url: '/videos/4.COOL.mp3',
    videoUrl: '/videos/test2.mp4',
    name: "Cool",
    artist: 'Pinballhead',
    playDuration: '03:40',
  },
  {
    id: '#5342',
    playlistId: '1',
    artistProfilePicture: '/images/pfp-3.png',
    artistProfileBigPicture: '/images/pfp-big-3.png',
    url: 'https://www.youtube.com/watch?v=ePpPVE-GGJw',
    videoUrl: '/videos/test.mp4',
    name: 'believe',
    artist: 'Pinballhead',
    playDuration: '02:32',
  },
  {
    id: '#12452',
    playlistId: '1',
    artistProfilePicture: '/images/pfp-1.png',
    artistProfileBigPicture: '/images/pfp-big-1.png',
    url: 'https://www.youtube.com/watch?v=vPwaXytZcgI',
    videoUrl: '/videos/test2.mp4',
    name: 'Scientist',
    artist: 'Pinballhead',
    playDuration: '03:20',
  },
  {
    id: '#98383',
    playlistId: '1',
    artistProfilePicture: '/images/pfp-2.png',
    artistProfileBigPicture: '/images/pfp-big-2.png',
    url: 'https://www.youtube.com/watch?v=rRzxEiBLQCA',
    videoUrl: '/videos/test2.mp4',
    name: 'GingaMingayo',
    artist: 'Pinballhead',
    playDuration: '03:12',
  },
  {
    id: '#848390',
    playlistId: '1',
    artistProfilePicture: '/images/pfp-1.png',
    artistProfileBigPicture: '/images/pfp-big-1.png',
    url: 'https://www.youtube.com/watch?v=E6rFkadHXN4',
    videoUrl: '/videos/test2.mp4',
    name: 'heart',
    artist: 'Pinballhead',
    playDuration: '03:38',
  },
  {
    id: '#20348',
    playlistId: '1',
    artistProfilePicture: '/images/pfp-1.png',
    artistProfileBigPicture: '/images/pfp-big-1.png',
    url: 'https://www.youtube.com/watch?v=E6rFkadHXN4',
    videoUrl: '/videos/test.mp4',
    name: 'Ring X Ring',
    artist: 'Pinballhead',
    playDuration: '03:38',
  },
  {
    id: '#10294',
    playlistId: '1',
    artistProfilePicture: '/images/pfp-2.png',
    artistProfileBigPicture: '/images/pfp-big-2.png',
    url: 'https://www.youtube.com/watch?v=CM4CkVFmTds',
    videoUrl: '/videos/test2.mp4',
    name: 'the eleventh day',
    artist: 'Pinballhead',
    playDuration: '03:40',
  },
  {
    id: '#69594',
    playlistId: '1',
    artistProfilePicture: '/images/pfp-3.png',
    artistProfileBigPicture: '/images/pfp-big-3.png',
    url: 'https://www.youtube.com/watch?v=ePpPVE-GGJw',
    videoUrl: '/videos/test.mp4',
    name: 'TT',
    artist: 'snowy night',
    playDuration: '02:32',
  },
  {
    id: '#42042',
    playlistId: '1',
    artistProfilePicture: '/images/pfp-1.png',
    artistProfileBigPicture: '/images/pfp-big-1.png',
    url: 'https://www.youtube.com/watch?v=vPwaXytZcgI',
    videoUrl: '/videos/test2.mp4',
    name: 'Scientist',
    artist: 'Pinballhead',
    playDuration: '03:20',
  },
  {
    id: '#65438',
    playlistId: '1',
    artistProfilePicture: '/images/pfp-2.png',
    artistProfileBigPicture: '/images/pfp-big-2.png',
    url: 'https://www.youtube.com/watch?v=rRzxEiBLQCA',
    videoUrl: '/videos/test2.mp4',
    name: 'Heart Shaker',
    artist: 'Pinballhead',
    playDuration: '03:12',
  },
  {
    id: '#12453',
    playlistId: '1',
    artistProfilePicture: '/images/pfp-1.png',
    artistProfileBigPicture: '/images/pfp-big-1.png',
    url: 'https://www.youtube.com/watch?v=E6rFkadHXN4',
    videoUrl: '/videos/test2.mp4',
    name: 'overlap',
    artist: 'Pinballhead',
    playDuration: '03:38',
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
