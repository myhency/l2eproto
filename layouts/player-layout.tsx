import { MyProfileSideBar } from '@components/my-profile/my-profile-side-bar';
import { useState } from 'react';
import { MainNavBar } from '@components/main/main-nav-bar';
import { MyWalletSideBar } from '@components/my-wallet/my-wallet-side-bar';
import styled from '@emotion/styled';
import { Box, Slide, Stack } from '@mui/material';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { PullToRefresh, PullDownContent, ReleaseContent, RefreshContent } from 'react-js-pull-to-refresh';
import Image from 'next/image';
import { Energy as EnergyIcon } from '@icons/energy';

interface PlayerLayoutProps {
  children: React.ReactElement;
}

const PlayerLayoutRoot = styled('div')(() => ({
  display: 'flex',
  flex: '1 1 auto',
  maxWidth: '100%',
  paddingTop: '4rem',
}));

export const PlayerLayout = ({ children }: PlayerLayoutProps) => {
  const [isMyProfileOpen, setIsMyProfileOpen] = useState(false);
  const [isMyWalletOpen, setIsMyWalletOpen] = useState(false);
  const trigger = useScrollTrigger();

  return (
    <div>
      <PlayerLayoutRoot>
        <Box
          sx={{
            display: 'flex',
            flex: '1 1 auto',
            flexDirection: 'column',
            width: '100%',
          }}
        >
          <Stack
            direction={'row'}
            spacing={2}
            justifyContent="space-between"
            alignItems={'center'}
            sx={{ padding: '1rem' }}
          >
            <div style={{ padding: '0.1rem', border: 'solid 0.1rem', borderColor: 'white', borderRadius: '20rem' }}>
              <img src="/images/headphone_gold.png" alt="" style={{ maxWidth: '2rem', overflow: 'hidden' }} />
            </div>
            <Stack direction={'row'} spacing={1} justifyContent="end" alignItems={'center'} flexGrow={1}>
              <Stack spacing={1} sx={{ display: 'flex', flexDirection: 'column', width: '50%' }}>
                <Stack direction={'row'} justifyContent="space-between">
                  <Stack direction={'row'} alignItems="center" justifyContent={'center'} spacing={1}>
                    <img src="/images/lbl-symbol.png" alt="" style={{ width: '1.2rem', height: '1.2rem' }} />
                    <span style={{ color: 'white', fontWeight: '900', fontSize: '0.8rem' }}>0.00</span>
                  </Stack>
                  <span style={{ color: 'rgba(255,255,255,0.6)', fontWeight: '900', fontSize: '0.8rem' }}>
                    100.00 LBL
                  </span>
                </Stack>
                <div
                  style={{
                    display: 'flex',
                    width: '100%',
                    minHeight: '1rem',
                    backgroundColor: 'rgba(255,255,255,0.2)',
                    borderRadius: '18px',
                  }}
                />
              </Stack>
              <Stack spacing={1} sx={{ display: 'flex', flexDirection: 'column', width: '50%' }}>
                <Stack direction={'row'} justifyContent="space-between">
                  <Stack direction={'row'} alignItems="center" justifyContent={'center'} spacing={1}>
                    <div
                      style={{
                        backgroundColor: 'rgba(255,255,255,0.2)',
                        borderRadius: '1.5rem',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '0.1rem',
                      }}
                    >
                      <EnergyIcon style={{ color: 'white', width: '0.9rem', height: '0.9rem' }} />
                    </div>
                    <span style={{ color: 'white', fontSize: '0.9rem' }}>100%</span>
                  </Stack>
                  <span style={{ color: 'rgba(255,255,255,0.6)', fontWeight: '900', fontSize: '0.8rem' }}>6h left</span>
                </Stack>
                <div
                  style={{
                    display: 'flex',
                    width: '100%',
                    minHeight: '1rem',
                    backgroundColor: 'rgba(255,255,255,0.6)',
                    borderRadius: '18px',
                  }}
                />
              </Stack>
            </Stack>
          </Stack>
          {children}
        </Box>
      </PlayerLayoutRoot>
      <MainNavBar onOpenMyProfile={() => setIsMyProfileOpen(true)} onOpenMyWallet={() => setIsMyWalletOpen(true)} />
      <MyProfileSideBar onClose={() => setIsMyProfileOpen(false)} open={isMyProfileOpen} />
      <MyWalletSideBar onClose={() => setIsMyWalletOpen(false)} open={isMyWalletOpen} />
    </div>
  );
};
