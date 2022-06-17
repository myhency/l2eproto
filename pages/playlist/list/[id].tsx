/* eslint-disable @next/next/no-img-element */
import { Box, Stack } from '@mui/material';
import { Page } from '../../../types/page';
import Head from 'next/head';
import React, { useEffect } from 'react';
import { AuthGuard } from '@components/authentication/auth-guard';
import { SampleLayout } from '@layouts/sample-layout';
import { useRouter } from 'next/router';
import { AppDispatch } from 'redux/store';
import { useDispatch } from 'react-redux';
import useAppSelector from '@hooks/use-app-selector';
import { IPlaylistReducer } from 'redux/interfaces';
import { fetchPlaylistAction } from 'redux/actions/playlist';

const SampleDetail: Page = () => {
  const router = useRouter();
  const dispatch: AppDispatch = useDispatch();
  const { playlist } = useAppSelector<IPlaylistReducer | null>((state) => state.playlist);
  const pending = useAppSelector<boolean>((state) => state.playlist.pending);

  useEffect(() => {
    dispatch(fetchPlaylistAction(router.query.id.toString()));
  }, [dispatch, router.query.id]);

  console.log(playlist);

  return (
    <>
      <Head>
        <title>SampleDetail</title>
      </Head>

      <Box component="main">
        {playlist && (
          <>
            <div style={{ position: 'relative' }}>
              <img
                src={playlist.image}
                alt=""
                style={{ objectFit: 'cover', minWidth: '100%', aspectRatio: '1', filter: 'brightness(65%)' }}
              />
              <Stack
                direction="column"
                justifyContent="start"
                sx={{ px: 3 }}
                style={{ position: 'absolute', bottom: '7%' }}
              >
                <span style={{ color: 'white', fontSize: '1.2rem', fontFamily: 'Gilroy-Bold' }}>{playlist.name}</span>
                <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.7rem' }}>
                  {playlist.creator} * {playlist.numOfSongs} songs
                </span>
              </Stack>
              <div style={{ position: 'absolute', right: '7%', bottom: '-8%' }}>
                <img src="/images/play-button.svg" alt="icon" />
              </div>
            </div>
            <Stack direction="row" alignItems="center" spacing={1} sx={{ p: '1.2rem' }}>
              <Stack direction="row" alignItems="center" spacing={1}>
                <img src="/images/favorite.svg" alt="icon" style={{ maxWidth: '1.7rem' }} />
                <img src="/images/more.svg" alt="icon" style={{ maxWidth: '1.7rem' }} />
              </Stack>
            </Stack>
          </>
        )}
      </Box>
    </>
  );
};

SampleDetail.getLayout = (page: React.ReactElement) => (
  <AuthGuard>
    <SampleLayout noPaddingTop>{page}</SampleLayout>
  </AuthGuard>
);

export default SampleDetail;
