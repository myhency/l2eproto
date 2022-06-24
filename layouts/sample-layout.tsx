import { MyProfileSideBar } from '@components/my-profile/my-profile-side-bar';
import { useState } from 'react';
import { MyWalletSideBar } from '@components/my-wallet/my-wallet-side-bar';
import styled from '@emotion/styled';
import { Box, Slide, Stack } from '@mui/material';
import { SampleNavBar } from '@components/sample/sample-nav-bar';
import SwipeableEdgeDrawer from '@components/player/swipable-drawer';

interface SampleLayoutProps {
  children: React.ReactElement;
  noPaddingTop?: boolean | undefined;
}

// const SampleLayoutRoot = styled('div')(() => ({
//   display: 'flex',
//   flex: '1 1 auto',
//   maxWidth: '100%',
//   paddingTop: noPaddingTop ? '0px' : '4rem',
// }));
type Props = {
  noPaddingTop: boolean | undefined;
};
const SampleLayoutRoot = styled('div')`
  display: flex;
  flex: 1 1 auto;
  max-width: 100%;
  padding-top: ${(props: Props) => (props.noPaddingTop ? '0px' : '4rem')};
`;

export const SampleLayout = ({ children, noPaddingTop }: SampleLayoutProps) => {
  console.log(noPaddingTop);
  const [isMyProfileOpen, setIsMyProfileOpen] = useState(false);
  const [isMyWalletOpen, setIsMyWalletOpen] = useState(false);

  return (
    <div>
      <SampleLayoutRoot noPaddingTop={noPaddingTop}>
        <Box
          sx={{
            display: 'flex',
            flex: '1 1 auto',
            flexDirection: 'column',
            width: '100%',
          }}
        >
          {/* <Stack
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
          </Stack> */}
          {children}
        </Box>
        {/* <div>
          <SwipeableEdgeDrawer />
        </div> */}
      </SampleLayoutRoot>

      <SampleNavBar onOpenMyProfile={() => setIsMyProfileOpen(true)} onOpenMyWallet={() => setIsMyWalletOpen(true)} />
      <MyProfileSideBar onClose={() => setIsMyProfileOpen(false)} open={isMyProfileOpen} />
      <MyWalletSideBar onClose={() => setIsMyWalletOpen(false)} open={isMyWalletOpen} />
    </div>
  );
};
