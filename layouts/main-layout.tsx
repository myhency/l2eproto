import { MyProfileSideBar } from '@components/my-profile/my-profile-side-bar';
import { useState } from 'react';
import { MainNavBar } from '@components/main/main-nav-bar';
import { MyWalletSideBar } from '@components/my-wallet/my-wallet-side-bar';
import styled from '@emotion/styled';
import { Box, Slide } from '@mui/material';
import useScrollTrigger from '@mui/material/useScrollTrigger';

interface MainLayoutProps {
  children: React.ReactNode;
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
          {children}
        </Box>
      </MainLayoutRoot>
      <MainNavBar onOpenMyProfile={() => setIsMyProfileOpen(true)} onOpenMyWallet={() => setIsMyWalletOpen(true)} />
      <MyProfileSideBar onClose={() => setIsMyProfileOpen(false)} open={isMyProfileOpen} />
      <MyWalletSideBar onClose={() => setIsMyWalletOpen(false)} open={isMyWalletOpen} />
    </div>
  );
};
