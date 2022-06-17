import { Box } from '@mui/material';
import { Page } from '../../types/page';
import Head from 'next/head';
import React from 'react';
import { AuthGuard } from '@components/authentication/auth-guard';
import { MainLayout } from '@layouts/main-layout';
import { SampleLayout } from '@layouts/sample-layout';

const Sample: Page = () => {
  return (
    <>
      <Head>
        <title>Sample</title>
      </Head>

      <Box component="main">Sample</Box>
    </>
  );
};

Sample.getLayout = (page: React.ReactElement) => (
  <AuthGuard>
    <SampleLayout>{page}</SampleLayout>
  </AuthGuard>
);

export default Sample;
