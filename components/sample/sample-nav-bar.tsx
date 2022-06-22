/* eslint-disable @next/next/no-img-element */
import { AppBar, Stack, Toolbar } from '@mui/material';
import { Container } from '@mui/system';
import { ChevronLeft as ChevronLeftIcon } from '@icons/chevron-left';
import { useRouter } from 'next/router';
import style from './style.module.scss';

interface SampleNavBarProps {
  onOpenMyProfile: () => void;
  onOpenMyWallet: () => void;
}

export const SampleNavBar = ({ onOpenMyProfile, onOpenMyWallet }: SampleNavBarProps) => {
  const router = useRouter();

  const handleOnClick = () => {
    router.back();
  };

  return (
    <>
      <AppBar elevation={0} position="fixed" sx={{ userDrag: 'none', backgroundColor: '#191919' }}>
        <Container>
          <Toolbar disableGutters sx={{ minHeight: 64 }}>
            <Stack direction="row" alignItems="center" justifyContent="center" style={{ position: 'absolute' }}>
              <Stack style={{ zIndex: '10' }} onClick={handleOnClick}>
                <ChevronLeftIcon style={{ color: 'rgba(255,255,255,0.87)' }} />
              </Stack>
            </Stack>
            <Stack flexGrow={1} justifyContent="center" style={{ position: 'relative' }}>
              <span className={style.test}>Playlist</span>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};
