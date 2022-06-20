import { deepCopy } from '@utils/deep-copy';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { IUser } from '../../interfaces';

export interface UpdateUserEarn {
  userId: string;
  totalPlayTime: number;
  totalEarnBLB: number;
  currentEnergy: number;
  headphoneId: string;
  battery: string;
}

let users = [
  {
    id: '1',
    totalPlayTime: 3000,
    totalEarnBLB: 1.2,
    totalEnergy: 4,
    currentEnergy: 1,
    headphones: [
      { id: '#16452324', image: '/images/headphone_gold.png', level: 5, battery: '100%', type: 'rare' },
      { id: '#24568454235', image: '/images/headphone_none.png', level: 1, battery: '100%', type: 'common' },
      { id: '#3347545', image: '/images/headphone_basic.png', level: 20, battery: '100%', type: 'uncommon' },
      { id: '#568423435', image: '/images/headphone_common.png', level: 1, battery: '100%', type: 'common' },
      { id: '#85628', image: '/images/headphone_uncommon.png', level: 1, battery: '100%', type: 'uncommon' },
    ],
  },
];

const TimeSleep = (time = 0) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

export const fetchUserByIdAction = createAsyncThunk('user/fetchUserById', async (userId: string): Promise<IUser> => {
  await TimeSleep(0);
  return users.find((v) => v.id === userId);
});

export const updateUserEarnByIdAction = createAsyncThunk(
  'user/updateUserEarnById',
  async ({
    userId,
    totalPlayTime,
    totalEarnBLB,
    currentEnergy,
    headphoneId,
    battery,
  }: UpdateUserEarn): Promise<IUser> => {
    await TimeSleep(0);
    const user = deepCopy(users.find((v) => v.id === userId));
    const headphone = user.headphones.find((v) => v.id === headphoneId);
    const headphoneIdx = user.headphones.indexOf(headphone);
    user.totalPlayTime = totalPlayTime;
    user.totalEarnBLB = totalEarnBLB;
    user.currentEnergy = currentEnergy;
    headphone.battery = battery;
    user.headphones[headphoneIdx] = headphone;
    users = user;
    console.log(users);
    return user;
  }
);
