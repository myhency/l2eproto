/* eslint-disable @next/next/no-img-element */
import { Stack } from '@mui/material';
import { intervalToDuration } from 'date-fns';
import { formatDuration } from '@utils/string';
import React from 'react';

interface Props {
  isPlaying: boolean;
  totalPlayTime: number;
  totalEarnBLB: number;
}

const EarnCounterView = ({ isPlaying, totalPlayTime, totalEarnBLB }: Props) => {
  const totalPlayTimeParse = intervalToDuration({ start: 0, end: totalPlayTime * 1000 });
  const formattedTotalPlayTime = formatDuration(totalPlayTimeParse);

  return (
    <>
      {isPlaying ? (
        <Stack direction={'row'} justifyContent="space-between" alignItems="center" spacing={1} sx={{ my: 2 }}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <img src="/images/player/timer.svg" alt="icon" style={{ minWidth: '1.5rem' }} />
            <span
              style={{
                color: 'rgba(255, 255, 255)',
                fontSize: '1.1rem',
                textAlign: 'left',
                verticalAlign: 'top',
              }}
            >
              {formattedTotalPlayTime}
            </span>
          </Stack>
          <Stack>
            <span
              style={{
                color: '#3CFF96',
                fontSize: '1.1rem',
                textAlign: 'left',
                verticalAlign: 'top',
                fontFamily: 'Gilroy-ExtraBold',
                fontWeight: 'bolder',
              }}
            >
              +{totalEarnBLB} BLB
            </span>
          </Stack>
        </Stack>
      ) : (
        <>
          <Stack direction="row" alignItems="center" justifyContent="center">
            <span
              style={{
                color: '#fff',
                fontSize: '1.1rem',
                textAlign: 'left',
                verticalAlign: 'top',
                fontFamily: 'Gilroy-ExtraBold',
                fontWeight: 'bolder',
              }}
            >
              START
            </span>
          </Stack>
        </>
      )}
    </>
  );
};

export default EarnCounterView;
