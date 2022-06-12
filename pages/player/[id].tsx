import { Box } from '@mui/material';
import { Page } from '../../types/page';
import Head from 'next/head';
import React from 'react';
import { AuthGuard } from '@components/authentication/auth-guard';
import { MainLayout } from '@layouts/main-layout';

const Player: Page = () => {
  return (
    <>
      <Head>
        <title>Player</title>
      </Head>

      <Box component="main">Player</Box>
    </>
  );
};

Player.getLayout = (page: React.ReactElement) => (
  <AuthGuard>
    <MainLayout>{page}</MainLayout>
  </AuthGuard>
);

export default Player;
