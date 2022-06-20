/* eslint-disable @next/next/no-img-element */
import { Container, Skeleton, Stack } from '@mui/material';
import React from 'react';

interface Props {
  pfpImageUrl: string;
}

const ArtistPFPView = ({ pfpImageUrl }: Props) => {
  return (
    <>
      <Stack justifyContent="center" alignItems="center" sx={{ mt: 16, mb: 10 }}>
        {pfpImageUrl ? (
          <img src={pfpImageUrl} alt="" style={{ objectFit: 'cover', minWidth: '15rem', minHeight: '15rem' }} />
        ) : (
          <Skeleton variant="circular" sx={{ bgcolor: 'grey.900' }} style={{ minWidth: '16rem', minHeight: '16rem' }} />
        )}
      </Stack>
    </>
  );
};

export default ArtistPFPView;
