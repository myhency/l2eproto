/* eslint-disable @next/next/no-img-element */
import { Box, Container, Grid, Hidden, Stack } from '@mui/material';
import { Page } from '../../types/page';
import Head from 'next/head';
import React, { useEffect } from 'react';
import { AuthGuard } from '@components/authentication/auth-guard';
import { MainLayout } from '@layouts/main-layout';
import { SampleLayout } from '@layouts/sample-layout';
import { AppDispatch } from 'redux/store';
import { useDispatch } from 'react-redux';
import useAppSelector from '@hooks/use-app-selector';
import { IPlaylistReducer } from 'redux/interfaces';
import { fetchPlaylistsAction } from 'redux/actions/playlist';
import NextLink from 'next/link';
import style from './style.module.scss';

const Sample: Page = () => {
  const dispatch: AppDispatch = useDispatch();
  const { playlists } = useAppSelector<IPlaylistReducer | null>((state) => state.playlist);
  const pending = useAppSelector<boolean>((state) => state.playlist.pending);
  useEffect(() => {
    dispatch(fetchPlaylistsAction());
  }, [dispatch]);

  return (
    <>
      <Head>
        <title>Sample</title>
      </Head>

      <Box component="main">
        <div
          style={{
            color: 'white',
            fontFamily: 'Gilroy',
            fontStyle: 'normal',
            fontWeight: 700,
            fontSize: '20px',
            lineHeight: '24px',
            margin: '12px 20px',
          }}
        >
          Top Pic
        </div>
        <div
          className={style.noScorll}
          style={{ display: 'flex', overflow: 'auto', gap: '10px', paddingLeft: '20px', marginBottom: '20px' }}
        >
          {playlists &&
            playlists.map((v, i) => {
              return (
                <div key={i}>
                  {i % 3 === 0 ? (
                    pending ? null : (
                      <NextLink href={`/playlist/list/${v.id}`} passHref>
                        <Stack direction="column" spacing={1} style={{ overflow: 'hidden', position: 'relative' }}>
                          <img src={v.image} alt="" style={{ height: '200px' }} />
                          <img src={v.image} alt="" style={{ height: '50px', margin: 0, filter: 'blur(26px)' }} />
                          <span
                            style={{
                              color: 'rgba(255, 255, 255, 0.87)',
                              fontWeight: '500',
                              fontSize: '0.8rem',
                              position: 'absolute',
                              top: '200px',
                              left: '8px',
                            }}
                          >
                            {v.name}
                          </span>
                          <span
                            style={{
                              color: 'rgba(255, 255, 255, 0.4)',
                              fontWeight: '500',
                              fontSize: '0.4rem',
                              position: 'absolute',
                              top: '220px',
                              left: '8px',
                            }}
                          >
                            {v.name}
                          </span>
                        </Stack>
                      </NextLink>
                    )
                  ) : (
                    ''
                  )}
                </div>
              );
            })}
        </div>
      </Box>
      <Box component="main">
        <div
          style={{
            color: 'white',
            fontFamily: 'Gilroy',
            fontStyle: 'normal',
            fontWeight: 700,
            fontSize: '20px',
            lineHeight: '24px',
            margin: '12px 20px',
          }}
        >
          Recent Played
        </div>
        <div className={style.noScorll} style={{ display: 'flex', overflow: 'auto', gap: '10px', paddingLeft: '20px' }}>
          {playlists &&
            playlists.map((v, i) => {
              return (
                <div key={i}>
                  {pending ? null : (
                    <NextLink href={`/playlist/list/${v.id}`} passHref>
                      <Stack direction="column" spacing={1}>
                        <img src={v.image} alt="" style={{ height: '150px' }} />
                        <span style={{ color: 'rgba(255, 255, 255, 0.87)', fontWeight: '500', fontSize: '0.9rem' }}>
                          {v.name}
                        </span>
                      </Stack>
                    </NextLink>
                  )}
                </div>
              );
            })}
        </div>
      </Box>
      <Box component="main">
        <div
          style={{
            color: 'white',
            fontFamily: 'Gilroy',
            fontStyle: 'normal',
            fontWeight: 700,
            fontSize: '20px',
            lineHeight: '24px',
            margin: '12px 20px',
          }}
        >
          ASMR
        </div>
        <div className={style.noScorll} style={{ display: 'flex', overflow: 'auto', gap: '10px', paddingLeft: '20px' }}>
          {playlists &&
            playlists.map((v, i) => {
              return (
                <div key={i}>
                  {i % 2 === 0 && i !== 1 ? (
                    pending ? null : (
                      <NextLink href={`/playlist/list/${v.id}`} passHref>
                        <Stack direction="column" spacing={1}>
                          <img src={v.image} alt="" style={{ height: '150px' }} />
                          <span style={{ color: 'rgba(255, 255, 255, 0.87)', fontWeight: '500', fontSize: '0.9rem' }}>
                            {v.name}
                          </span>
                        </Stack>
                      </NextLink>
                    )
                  ) : (
                    ''
                  )}
                </div>
              );
            })}
        </div>
      </Box>
    </>
  );
};

Sample.getLayout = (page: React.ReactElement) => (
  <AuthGuard>
    <SampleLayout>{page}</SampleLayout>
  </AuthGuard>
);

export default Sample;
