/* eslint-disable @next/next/no-img-element */
import NextLink from 'next/link';
import { AppBar, Stack, Toolbar } from '@mui/material';
import { Container } from '@mui/system';
import { ChevronLeft as ChevronLeftIcon } from '@icons/chevron-left';

interface SampleNavBarProps {
  onOpenMyProfile: () => void;
  onOpenMyWallet: () => void;
}

export const SampleNavBar = ({ onOpenMyProfile, onOpenMyWallet }: SampleNavBarProps) => {
  return (
    <>
      <AppBar elevation={0} position="fixed" sx={{ userDrag: 'none', backgroundColor: 'rgba(255,255,255,0)' }}>
        <Container>
          <Toolbar disableGutters sx={{ minHeight: 64 }}>
            <Stack direction="row" alignItems="center" justifyContent="center" style={{ position: 'absolute' }}>
              <NextLink href="/" passHref>
                <Stack style={{ zIndex: '10' }}>
                  <ChevronLeftIcon style={{ color: 'rgba(255,255,255,0.87)' }} />
                </Stack>
              </NextLink>
            </Stack>
            <Stack flexGrow={1} justifyContent="center" style={{ position: 'relative' }}>
              <span
                style={{ fontSize: 'large', fontWeight: '900', fontFamily: 'Gilroy-ExtraBold', textAlign: 'center' }}
              >
                Playlist
              </span>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};
