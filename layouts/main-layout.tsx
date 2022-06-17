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
import { Wallet2 as Wallet2Icon } from '@icons/wallet-2';

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
              <img
                src="/images/user-avatar.png"
                alt="icon"
                style={{ width: '1.8rem', height: '1.8rem', objectFit: 'none' }}
              />
              <span style={{ color: 'rgba(255, 255, 255, 0.87)', fontWeight: '900', fontSize: '0.75rem' }}>
                00h 00m
              </span>
            </Stack>
            <Stack
              spacing={1}
              direction="row"
              style={{
                backgroundColor: 'rgba(255,255,255,0.12)',
                borderRadius: '24px',
              }}
            >
              <Stack direction={'row'} alignItems="center" justifyContent={'center'} spacing={1} sx={{ pl: 1 }}>
                <img src="/images/blb-symbol.png" alt="" style={{ width: '0.9rem', height: '0.9rem' }} />
                <span style={{ color: 'white', fontWeight: '900', fontSize: '0.75rem' }}>0.00</span>
              </Stack>
              <Stack direction={'row'} alignItems="center" justifyContent={'center'} spacing={1}>
                <img src="/images/lbl-symbol.png" alt="" style={{ width: '0.9rem', height: '0.9rem' }} />
                <span style={{ color: 'white', fontWeight: '900', fontSize: '0.75rem' }}>0.00</span>
              </Stack>
              <Stack
                direction={'row'}
                alignItems="center"
                justifyContent={'center'}
                spacing={1}
                sx={{ paddingLeft: '0.1rem' }}
              >
                <img src="/images/bnb-symbol.png" alt="" style={{ width: '0.9rem', height: '0.9rem' }} />
                <span style={{ color: 'white', fontWeight: '900', fontSize: '0.75rem' }}>0.00</span>
              </Stack>
              <Stack>
                <img
                  src="/images/wallet.png"
                  alt="icon"
                  style={{ width: '1.8rem', height: '1.8rem', objectFit: 'none' }}
                />
              </Stack>
            </Stack>
          </Stack>
          <Stack direction="row" justifyContent="start" alignItems="center" sx={{ px: '1rem', pb: '1rem' }}>
            <Stack direction="row" alignItems="center" spacing={1}>
              <img
                src="/images/inventory-icon.png"
                alt="icon"
                style={{ width: '1.8rem', height: '1.8rem', objectFit: 'none' }}
              />
            </Stack>
          </Stack>
          <PullToRefresh
            pullDownContent={<PullDownContent />}
            releaseContent={<ReleaseContent />}
            refreshContent={<RefreshContent />}
            pullDownThreshold={100}
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
