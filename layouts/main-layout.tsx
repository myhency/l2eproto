/* eslint-disable @next/next/no-img-element */
import { MyProfileSideBar } from '@components/my-profile/my-profile-side-bar';
import { useState } from 'react';
import { MainNavBar } from '@components/main/main-nav-bar';
import { MyWalletSideBar } from '@components/my-wallet/my-wallet-side-bar';
import styled from '@emotion/styled';
import { Box, Slide, Stack } from '@mui/material';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { PullToRefresh, PullDownContent, ReleaseContent, RefreshContent } from 'react-js-pull-to-refresh';
import { MyProfileAvatar as MyProfileAvatarIcon } from '@icons/myprofile-avatar';
import { Wallet as WalletIcon } from '@icons/wallet';

interface MainLayoutProps {
  children: React.ReactElement;
}

const MainLayoutRoot = styled('div')(() => ({
  display: 'flex',
  flex: '1 1 auto',
  maxWidth: '100%',
  paddingTop: '4rem',
}));

export const MainLayout = ({ children }: MainLayoutProps) => {
  const [isMyProfileOpen, setIsMyProfileOpen] = useState(false);
  const [isMyWalletOpen, setIsMyWalletOpen] = useState(false);
  const trigger = useScrollTrigger();

  return (
    <div>
      <MainLayoutRoot>
        <Box
          sx={{
            display: 'flex',
            flex: '1 1 auto',
            flexDirection: 'column',
            width: '100%',
          }}
        >
          <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ padding: '1rem' }}>
            <Stack direction="row" alignItems="center" spacing={1}>
              <MyProfileAvatarIcon style={{ width: '1.5rem', height: '1.5rem' }} />
              <div
                style={{
                  backgroundColor: 'rgba(255,255,255,0.2)',
                  borderRadius: '1rem',
                  padding: '0 0.1rem 0 0.1rem',
                }}
              >
                <span style={{ color: 'white', fontSize: '0.7rem' }}>00h 00m</span>
              </div>
            </Stack>
            <Stack
              spacing={1}
              direction="row"
              style={{
                backgroundColor: 'rgba(255,255,255,0.2)',
                borderRadius: '1rem',
                padding: '0 0.1rem 0 0.1rem',
              }}
            >
              <Stack
                direction={'row'}
                alignItems="center"
                justifyContent={'center'}
                spacing={1}
                sx={{ paddingLeft: '0.1rem' }}
              >
                <img src="/images/bnb-symbol.png" alt="" style={{ width: '1.2rem', height: '1.2rem' }} />
                <span style={{ color: 'white', fontWeight: '900', fontSize: '0.8rem' }}>0.00</span>
              </Stack>
              <Stack direction={'row'} alignItems="center" justifyContent={'center'} spacing={1}>
                <img src="/images/lbl-symbol.png" alt="" style={{ width: '1.2rem', height: '1.2rem' }} />
                <span style={{ color: 'white', fontWeight: '900', fontSize: '0.8rem' }}>0.00</span>
              </Stack>
              <Stack>
                <WalletIcon style={{ width: '2rem', height: '2rem' }} />
              </Stack>
            </Stack>
          </Stack>
          <PullToRefresh
            pullDownContent={<PullDownContent />}
            releaseContent={<ReleaseContent />}
            refreshContent={<RefreshContent />}
            pullDownThreshold={1}
            onRefresh={() =>
              new Promise((resolve) => {
                setTimeout(resolve, 1000);
              })
            }
            triggerHeight={'auto'}
            backgroundColor="white"
          >
            {children}
          </PullToRefresh>
        </Box>
      </MainLayoutRoot>
      <MainNavBar onOpenMyProfile={() => setIsMyProfileOpen(true)} onOpenMyWallet={() => setIsMyWalletOpen(true)} />
      <MyProfileSideBar onClose={() => setIsMyProfileOpen(false)} open={isMyProfileOpen} />
      <MyWalletSideBar onClose={() => setIsMyWalletOpen(false)} open={isMyWalletOpen} />
    </div>
  );
};
