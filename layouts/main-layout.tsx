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
