/* eslint-disable @next/next/no-img-element */
import NextLink from 'next/link';
import { AppBar, Box, Button, Fade, Stack, Toolbar, useScrollTrigger } from '@mui/material';
import { Container } from '@mui/system';
import { ShoppingCart as ShoppingCartIcon } from '@icons/shopping-cart';
import { AcademicCap as AcademicCapIcon } from '@icons/academic-cap';
import { Archive as ArchiveIcon } from '@icons/archive';
import { VolumeUp as VolumeUpIcon } from '@icons/volume-up';
import { Headphone as HeadphoneIcon } from '@icons/headphone';
import { Prize as PrizeIcon } from '@icons/prize';
import { Playlist as PlaylistIcon } from '@icons/playlist';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

interface MainNavBarProps {
  onOpenMyProfile: () => void;
  onOpenMyWallet: () => void;
}

export const ScrollTop = () => {
  const router = useRouter();
  const [currentActive, setCurrentActive] = useState(router.pathname);
  const trigger = useScrollTrigger({ threshold: 0 });

  useEffect(() => {
    setCurrentActive(router.pathname);
  }, [router]);

  const colorByActiveState = `${currentActive === '/inventory' ? 'white' : '#ffffff3b'}`;

  return (
    <Fade in={!trigger}>
      <Box
        sx={{
          position: 'fixed',
          bottom: 0,
          right: 0,
          left: 0,
          zIndex: 10,
          // padding: '4px 16px 4px 16px',
          // marginRight: '1rem',
          // marginLeft: '1rem',
          backgroundColor: '#222222',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            // backgroundColor: 'lightgray',
            // borderRadius: '18px',
            minHeight: '9vh',
            minWidth: '100vw',
            paddingLeft: '1rem',
            paddingRight: '1rem',
          }}
        >
          <NextLink href="/" passHref>
            <Stack direction="column" justifyContent="center" alignItems="center">
              <Button>
                <HeadphoneIcon
                  style={{
                    color: `${currentActive === '/' ? 'white' : '#ffffff3b'}`,
                    minWidth: '34px',
                    minHeight: '34px',
                  }}
                />
              </Button>
              <span style={{ color: `${currentActive === '/' ? 'white' : '#ffffff3b'}`, fontSize: '12px' }}>
                Headphone
              </span>
            </Stack>
          </NextLink>
          <NextLink href="/inventory" passHref>
            <Stack direction="column" justifyContent="center" alignItems="center">
              <Button>
                <ArchiveIcon
                  style={{
                    color: `${currentActive === '/inventory' ? 'white' : '#ffffff3b'}`,
                    minWidth: '34px',
                    minHeight: '34px',
                  }}
                />
              </Button>
              <span style={{ color: `${currentActive === '/inventory' ? 'white' : '#ffffff3b'}`, fontSize: '12px' }}>
                Inventory
              </span>
            </Stack>
          </NextLink>
          <NextLink href="/playlist/sample" passHref>
            <Stack direction="column" justifyContent="center" alignItems="center">
              <Button>
                <PlaylistIcon
                  style={{
                    color: `${currentActive.includes('/playlist') ? 'white' : '#ffffff3b'}`,
                    minWidth: '34px',
                    minHeight: '34px',
                  }}
                />
              </Button>
              <span
                style={{ color: `${currentActive.includes('/playlist') ? 'white' : '#ffffff3b'}`, fontSize: '12px' }}
              >
                Playlist
              </span>
            </Stack>
          </NextLink>
          <NextLink href="/marketplace" passHref>
            <Stack direction="column" justifyContent="center" alignItems="center">
              <Button>
                <ShoppingCartIcon
                  style={{
                    color: `${currentActive === '/marketplace' ? 'white' : '#ffffff3b'}`,
                    minWidth: '34px',
                    minHeight: '34px',
                  }}
                />
              </Button>
              <span style={{ color: `${currentActive === '/marketplace' ? 'white' : '#ffffff3b'}`, fontSize: '12px' }}>
                Marketplace
              </span>
            </Stack>
          </NextLink>
        </Box>
      </Box>
    </Fade>
  );
};

export const MainNavBar = ({ onOpenMyProfile, onOpenMyWallet }: MainNavBarProps) => {
  return (
    <>
      <AppBar elevation={0} position="fixed" sx={{ userDrag: 'none', backgroundColor: '#121212' }}>
        <Container>
          <Toolbar disableGutters sx={{ minHeight: 64 }}>
            <Box sx={{ display: 'flex', marginLeft: '10px' }}>
              <img src="/images/FrameText.png" alt="icon" />
            </Box>
            <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'end' }}>
              <Stack
                spacing={1}
                direction="row"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.12)',
                  borderRadius: '24px',
                  height: '26px',
                  marginTop: '3px',
                }}
              >
                <Stack direction={'row'} alignItems="center" justifyContent={'center'} spacing={1} sx={{ pl: 1 }}>
                  <img src="/images/blb-symbol.png" alt="" style={{ width: '0.8rem', height: '0.8rem' }} />
                  <span style={{ color: 'white', fontWeight: '900', fontSize: '0.75rem' }}>0</span>
                </Stack>
                <Stack direction={'row'} alignItems="center" justifyContent={'center'} spacing={1}>
                  <img src="/images/lbl-symbol.png" alt="" style={{ width: '0.8rem', height: '0.8rem' }} />
                  <span style={{ color: 'white', fontWeight: '900', fontSize: '0.75rem' }}>0</span>
                </Stack>
                <Stack
                  direction={'row'}
                  alignItems="center"
                  justifyContent={'center'}
                  spacing={1}
                  sx={{ paddingLeft: '0.1rem' }}
                >
                  <img src="/images/bnb-symbol.png" alt="" style={{ width: '0.8rem', height: '0.8rem' }} />
                  <span style={{ color: 'white', fontWeight: '900', fontSize: '0.75rem' }}>0</span>
                </Stack>
                <Stack>
                  <img
                    src="/images/wallet.png"
                    alt="icon"
                    style={{ width: '1.8rem', height: '1.8rem', objectFit: 'none', opacity: '0' }}
                  />
                </Stack>
              </Stack>
              <img
                src="/images/wallet.png"
                alt="icon"
                style={{
                  width: '1.8rem',
                  height: '1.8rem',
                  objectFit: 'none',
                  position: 'absolute',
                  right: '34px',
                  top: '18px',
                }}
              />
              <img
                src="/images/user-avatar.png"
                alt="icon"
                style={{ width: '1.8rem', height: '1.8rem', objectFit: 'none', marginLeft: '6px',marginTop:'1px' }}
              />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      {/* <ScrollTop /> */}
    </>
  );
};
