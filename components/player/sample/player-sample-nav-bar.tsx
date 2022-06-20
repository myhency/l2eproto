/* eslint-disable @next/next/no-img-element */
import { AppBar, Stack, Toolbar } from '@mui/material';
import { Container } from '@mui/system';
import { ChevronLeft as ChevronLeftIcon } from '@icons/chevron-left';
import { useRouter } from 'next/router';

interface PlayerSampleNavBarProps {
  playlistName: string;
  playlistId: string;
}

export const PlayerSampleNavBar = ({ playlistName, playlistId }: PlayerSampleNavBarProps) => {
  const router = useRouter();

  const handleOnClick = () => {
    router.back();
  };

  return (
    <>
      <AppBar elevation={0} position="fixed" sx={{ userDrag: 'none', backgroundColor: 'rgba(255,255,255,0)' }}>
        <Container>
          <Toolbar disableGutters sx={{ minHeight: 64 }}>
            <Stack style={{ zIndex: '10' }} onClick={handleOnClick}>
              <ChevronLeftIcon style={{ color: 'rgba(255,255,255,0.87)' }} />
            </Stack>
            <Stack direction="column" flexGrow={1} justifyContent="center">
              <span style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.6)', textAlign: 'center' }}>List</span>
              <span style={{ fontSize: '1rem', color: 'rgba(255, 255, 255, 0.87)', textAlign: 'center' }}>
                {playlistName}
              </span>
            </Stack>
            <Stack style={{ zIndex: '10' }}>
              <img src="/images/more.svg" alt="icon" style={{ maxWidth: '1.7rem' }} />
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};
