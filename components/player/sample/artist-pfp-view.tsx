/* eslint-disable @next/next/no-img-element */
import { Container, Skeleton, Stack } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';

interface Props {
  pfpImageUrl: string;
}

const ArtistPFPView = ({ pfpImageUrl }: Props) => {
  return (
    <>
      <Stack justifyContent="center" alignItems="center" sx={{ mt: 16, mb: 10, minHeight: '15rem' }}>
        {pfpImageUrl ? (
          <video
            loop
            playsInline
            autoPlay={true}
            muted={true}
            style={{ objectFit: 'cover', minWidth: '15rem', maxHeight: '15rem', borderRadius: '100%' }}
            key={pfpImageUrl}
          >
            <source src={pfpImageUrl} type="video/mp4" />
          </video>
        ) : (
          <Skeleton variant="circular" sx={{ bgcolor: 'grey.900' }} style={{ minWidth: '16rem', minHeight: '16rem' }} />
        )}
      </Stack>
    </>
  );
};

export default ArtistPFPView;
