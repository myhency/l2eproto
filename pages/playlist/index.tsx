import { Box } from '@mui/material';
import { Page } from '../../types/page';
import Head from 'next/head';
import React from 'react';
import { AuthGuard } from '@components/authentication/auth-guard';
import { MainLayout } from '@layouts/main-layout';

const Playlist: Page = () => {
  return (
    <>
      <Head>
        <title>playlist</title>
      </Head>

      <Box component="main">playlist</Box>
    </>
  );
};

Playlist.getLayout = (page: React.ReactElement) => (
  <AuthGuard>
    <MainLayout>{page}</MainLayout>
  </AuthGuard>
);

export default Playlist;
