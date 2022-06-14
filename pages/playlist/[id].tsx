import { Box, Button, Stack } from '@mui/material';
import { Page } from '../../types/page';
import Head from 'next/head';
import React from 'react';
import { AuthGuard } from '@components/authentication/auth-guard';
import { MainLayout } from '@layouts/main-layout';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

const PlaylistDetail: Page = () => {
  const router = useRouter();
  const id = router.asPath.split('/')[2];

  return (
    <>
      <Head>
        <title>PlaylistDetail</title>
      </Head>

      <Box component="main" sx={{ padding: '1rem 1rem 1rem 0' }}>
        <Stack direction="column" justifyContent="center" alignItems="center">
          <Box>PFP</Box>
          <Box>PFP name</Box>
          <NextLink href={`/player/${id}`} passHref>
            <Button>Start Earn</Button>
          </NextLink>
          <Stack direction="column">song list</Stack>
        </Stack>
      </Box>
    </>
  );
};

PlaylistDetail.getLayout = (page: React.ReactElement) => (
  <AuthGuard>
    <MainLayout>{page}</MainLayout>
  </AuthGuard>
);

export default PlaylistDetail;
