import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { Box } from '@mui/material';
import { PlayerSampleNavBar } from '@components/player/sample/player-sample-nav-bar';
import { useRouter } from 'next/router';
import { AppDispatch } from 'redux/store';
import { useDispatch } from 'react-redux';
import { IPlaylistReducer } from 'redux/interfaces';
import useAppSelector from '@hooks/use-app-selector';
import { fetchPlaylistAction } from 'redux/actions/playlist';

interface PlayerLayoutProps {
  children: React.ReactElement;
}

const PlayerSampleLayoutRoot = styled('div')(() => ({
  display: 'flex',
  flex: '1 1 auto',
  maxWidth: '100%',
}));

export const PlayerSampleLayout = ({ children }: PlayerLayoutProps) => {
  const router = useRouter();
  const dispatch: AppDispatch = useDispatch();
  const { playlist } = useAppSelector<IPlaylistReducer | null>((state) => state.playlist);
  const playlistId = router.query.id.toString();

  useEffect(() => {
    dispatch(fetchPlaylistAction(playlistId));
  }, [dispatch, playlistId]);

  return (
    <div>
      <PlayerSampleLayoutRoot>
        <Box
          sx={{
            display: 'flex',
            flex: '1 1 auto',
            flexDirection: 'column',
            width: '100%',
          }}
        >
          {children}
        </Box>
      </PlayerSampleLayoutRoot>
      <PlayerSampleNavBar playlistName={playlist?.name} playlistId={playlistId} />
    </div>
  );
};
