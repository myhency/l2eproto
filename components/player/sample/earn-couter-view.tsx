/* eslint-disable @next/next/no-img-element */
import { Stack } from '@mui/material';
import { intervalToDuration } from 'date-fns';
import { formatDuration } from '@utils/string';
import React, { useEffect, useState } from 'react';
import Jump from 'react-reveal/Jump';
import Swing from 'react-reveal/Swing';
import Tada from 'react-reveal/Tada';

interface Props {
  isPlaying: boolean;
  totalPlayTime: number;
  totalEarnBLB: number;
}

const EarnCounterView = ({ isPlaying, totalPlayTime, totalEarnBLB }: Props) => {
  const totalPlayTimeParse = intervalToDuration({ start: 0, end: totalPlayTime * 1000 });
  const formattedTotalPlayTime = formatDuration(totalPlayTimeParse);
  const [test, setTest] = useState(false);

  useEffect(() => {
    setTest(true);
    setTimeout(() => {
      setTest(false);
    }, 900);
  }, [totalEarnBLB]);

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
            {test ? (
              <Tada>
                <span
                  style={{
                    color: '#3CFF96',
                    height: '50px',
                    fontSize: '1.4rem',
                    textAlign: 'left',
                    verticalAlign: 'top',
                    fontFamily: 'Gilroy-ExtraBold',
                    fontWeight: 'bolder',
                    translate: '2s',
                    paddingTop: '11px',
                  }}
                >
                  +{totalEarnBLB} BLB
                </span>
              </Tada>
            ) : (
              <span
                style={{
                  color: '#3CFF96',
                  height: '50px',
                  paddingTop: '11px',
                  fontSize: '1.1rem',
                  textAlign: 'left',
                  verticalAlign: 'top',
                  fontFamily: 'Gilroy-ExtraBold',
                  fontWeight: 'bolder',
                  translate: '2s',
                }}
              >
                +{totalEarnBLB} BLB
              </span>
            )}
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
