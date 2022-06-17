/* eslint-disable @next/next/no-img-element */
import { Box, Container, Grid, Stack } from '@mui/material';
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

const Sample: Page = () => {
  const dispatch: AppDispatch = useDispatch();
  const { playlists } = useAppSelector<IPlaylistReducer | null>((state) => state.playlist);
  const pending = useAppSelector<boolean>((state) => state.playlist.pending);
  useEffect(() => {
    dispatch(fetchPlaylistsAction());
  }, [dispatch]);

  console.log(playlists);

  return (
    <>
      <Head>
        <title>Sample</title>
      </Head>

      <Box component="main">
        <Container sx={{ pt: 2, px: 3 }}>
          <Grid container spacing={3}>
            {playlists &&
              playlists.map((v, i) => {
                return (
                  <Grid item xs={6} key={i}>
                    <NextLink href={`/playlist/list/${v.id}`} passHref>
                      <Stack direction="column" spacing={1}>
                        <img src={v.image} alt="" />
                        <span style={{ color: 'rgba(255, 255, 255, 0.87)', fontWeight: '500', fontSize: '0.9rem' }}>
                          {v.name}
                        </span>
                      </Stack>
                    </NextLink>
                  </Grid>
                );
              })}
          </Grid>
        </Container>
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
