/* eslint-disable @next/next/no-img-element */
import { Box, Grid, IconButton, Stack } from '@mui/material';
import { Page } from '../../types/page';
import Head from 'next/head';
import React from 'react';
import { AuthGuard } from '@components/authentication/auth-guard';
import { MainLayout } from '@layouts/main-layout';
import { Container } from '@mui/system';
import { MainPlay as MainPlayIcon } from '@icons/main-play';
import { Play as PlayIcon } from '@icons/play';

const playlist = [
  { thumbnail: '/images/playlist-card-rainy-day.png', name: 'Rainy Day' },
  { thumbnail: '/images/playlist-card-partytime.png', name: 'Party Time' },
  { thumbnail: '/images/playlist-card-afternoon-cafe.png', name: 'Afternoon Cafe' },
  { thumbnail: '/images/playlist-card-a-city-walk.png.png', name: 'A City Walk' },
  { thumbnail: '/images/playlist-card-siesta.png', name: 'Siesta' },
  { thumbnail: '/images/playlist-card-camping.png', name: 'Camping' },
  { thumbnail: '/images/playlist-card-rainy-day.png', name: 'Rainy Day' },
  { thumbnail: '/images/playlist-card-partytime.png', name: 'Party Time' },
  { thumbnail: '/images/playlist-card-afternoon-cafe.png', name: 'Afternoon Cafe' },
  { thumbnail: '/images/playlist-card-a-city-walk.png.png', name: 'A City Walk' },
  { thumbnail: '/images/playlist-card-siesta.png', name: 'Siesta' },
  { thumbnail: '/images/playlist-card-camping.png', name: 'Camping' },
];

const Playlist: Page = () => {
  return (
    <>
      <Head>
        <title>playlist</title>
      </Head>

      <Box component="main" sx={{ '&::-webkit-scrollbar': { display: 'none' } }}>
        <Container sx={{ '&::-webkit-scrollbar': { display: 'none' } }}>
          <Stack direction="column">
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                py: 3,
              }}
            >
              <span
                style={{
                  fontSize: '28px',
                  fontWeight: '900',
                }}
              >
                Play your mood
              </span>
            </Box>
          </Stack>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Grid container spacing={1}>
              {playlist.map((v, i) => {
                return (
                  <Grid item xs={6} key={i}>
                    <Box
                      sx={{
                        position: 'relative',
                        display: 'flex',
                        justifyContent: 'center',
                      }}
                    >
                      <img
                        src={v.thumbnail}
                        alt=""
                        style={{
                          maxHeight: '130px',
                          minWidth: '100%',
                          background: 'linear-gradient(0deg, rgba(255, 0, 150, 0.3), rgba(255, 0, 150, 0.3))',
                        }}
                      />
                      <div
                        style={{
                          maxHeight: '130px',
                          minWidth: '100%',
                          minHeight: '100%',
                          position: 'absolute',
                          backgroundImage: 'linear-gradient(rgba(0,0,0, 0.6), rgba(0,0,0, 0.1))',
                          left: 0,
                          top: 0,
                        }}
                      />
                      <span
                        style={{
                          position: 'absolute',
                          fontSize: '14px',
                          fontWeight: 'bold',
                          color: 'white',
                          zIndex: 10,
                          left: 10,
                          top: 6,
                        }}
                      >
                        {v.name}
                      </span>
                      <IconButton
                        style={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          position: 'absolute',
                          right: 8,
                          bottom: 8,
                        }}
                      >
                        <PlayIcon style={{ color: 'rgba(255,255,255, 0.7)', width: '30px', height: '30px' }} />
                      </IconButton>
                    </Box>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

Playlist.getLayout = (page: React.ReactElement) => (
  <AuthGuard>
    <MainLayout>{page}</MainLayout>
  </AuthGuard>
);

export default Playlist;
