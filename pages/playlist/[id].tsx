/* eslint-disable @next/next/no-img-element */
import { Box, Button, Container, Stack } from '@mui/material';
import { Page } from '../../types/page';
import Head from 'next/head';
import React from 'react';
import { AuthGuard } from '@components/authentication/auth-guard';
import { MainLayout } from '@layouts/main-layout';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { PlayerLayout } from '@layouts/player-layout';
import { Grapper as GrapperIcon } from '@icons/grapper';

const playlist = [
  { id: '1', image: '/images/pfp-1.png', name: 'Title 1', creator: 'Artist 1', playTime: '03:30' },
  { id: '2', image: '/images/pfp-2.png', name: 'Title 2', creator: 'Artist 2', playTime: '04:53' },
  { id: '3', image: '/images/pfp-3.png', name: 'Title 3', creator: 'Artist 3', playTime: '02:47' },
  { id: '4', image: '/images/pfp-1.png', name: 'Title 4', creator: 'Artist 4', playTime: '03:18' },
  { id: '5', image: '/images/pfp-2.png', name: 'Title 5', creator: 'Artist 5', playTime: '05:23' },
  { id: '6', image: '/images/pfp-3.png', name: 'Title 6', creator: 'Artist 6', playTime: '02:51' },
  { id: '7', image: '/images/pfp-1.png', name: 'Title 7', creator: 'Artist 7', playTime: '03:31' },
  { id: '8', image: '/images/pfp-2.png', name: 'Title 8', creator: 'Artist 8', playTime: '03:22' },
  { id: '9', image: '/images/pfp-3.png', name: 'Title 9', creator: 'Artist 9', playTime: '04:12' },
  { id: '10', image: '/images/pfp-1.png', name: 'Title 10', creator: 'Artist 10', playTime: '02:32' },
];

const PlaylistDetail: Page = () => {
  const router = useRouter();
  const id = router.asPath.split('/')[2];

  return (
    <>
      <Head>
        <title>PlaylistDetail</title>
      </Head>

      <Box component="main" sx={{ padding: '1rem 1rem 1rem 0' }}>
        <Container>
          <Stack direction={'column'} justifyContent="start" alignItems={'flex-start'}>
            <span style={{ color: 'white', fontWeight: '900', fontSize: '1.1rem' }}>List Name</span>
            <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>List creator * 00 songs</span>
          </Stack>
          <Stack direction={'row'} justifyContent="center" alignItems={'center'} spacing={2} sx={{ my: 2 }}>
            <NextLink href="/player/1" passHref>
              <Button
                variant="contained"
                sx={{ px: 3, backgroundColor: 'white', color: 'black', width: '100%', minHeight: '2rem' }}
              >
                Earn start
              </Button>
            </NextLink>
            <NextLink href="/player" passHref>
              <Button
                variant="outlined"
                sx={{ px: 3, color: 'white', borderColor: 'white', width: '100%', minHeight: '2rem' }}
              >
                play
              </Button>
            </NextLink>
          </Stack>
        </Container>
        <Stack direction="column">
          {playlist.map((v) => (
            <Stack direction={'row'} alignItems="center" key={v.id} sx={{ p: 2 }}>
              <div>
                <img src={v.image} alt="" style={{ maxWidth: '2rem', overflow: 'hidden' }} />
              </div>
              <Stack direction={'column'} flexGrow={1}>
                <span style={{ color: 'white', fontWeight: '900', fontSize: '1.1rem' }}>{v.name}</span>
                <span
                  style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}
                >{`${v.creator} * ${v.playTime}`}</span>
              </Stack>
              <Stack alignItems={'center'}>
                <GrapperIcon />
              </Stack>
            </Stack>
          ))}
        </Stack>
      </Box>
    </>
  );
};

PlaylistDetail.getLayout = (page: React.ReactElement) => (
  <AuthGuard>
    <PlayerLayout>{page}</PlayerLayout>
  </AuthGuard>
);

export default PlaylistDetail;
