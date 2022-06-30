import { createAsyncThunk } from '@reduxjs/toolkit';

import { IHeadphone } from '../../interfaces';

const headphones = [
  { id: '#16452324', image: '/images/headphone_common.png', level: 5, battery: '63%', type: 'rare' },
  { id: '#24568454235', image: '/images/headphone_common2.png', level: 13, battery: '30%', type: 'common' },
  { id: '#3347545', image: '/images/headphone_epic.png', level: 20, battery: '70%', type: 'uncommon' },
  { id: '#568423435', image: '/images/headphone_legendary.png', level: 2, battery: '50%', type: 'common' },
  { id: '#85628', image: '/images/headphone_rare.png', level: 1, battery: '100%', type: 'uncommon' },
  { id: '#34585628', image: '/images/headphone_uncommon.png', level: 11, battery: '35%', type: 'uncommon' },
];

const TimeSleep = (time = 0) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

export const fetchHeadphonesAction = createAsyncThunk(
  'headphone/fetchHeadphones',
  async (): Promise<Array<IHeadphone>> => {
    await TimeSleep(0);

    return headphones;
  }
);
