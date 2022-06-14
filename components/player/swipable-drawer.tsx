import * as React from 'react';
import PropTypes from 'prop-types';
import { Global } from '@emotion/react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { grey } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { Stack } from '@mui/material';
import { Grapper as GrapperIcon } from '@icons/grapper';

const playlist = [
  { id: '1', image: '/images/pfp-1.png', name: 'Title 1', creator: 'Artist 1', playTime: '03:30' },
  { id: '2', image: '/images/pfp-2.png', name: 'Title 2', creator: 'Artist 2', playTime: '04:53' },
  { id: '3', image: '/images/pfp-3.png', name: 'Title 3', creator: 'Artist 3', playTime: '02:47' },
  { id: '4', image: '/images/pfp-1.png', name: 'Title 4', creator: 'Artist 4', playTime: '03:18' },
  { id: '5', image: '/images/pfp-2.png', name: 'Title 5', creator: 'Artist 5', playTime: '05:23' },
  { id: '6', image: '/images/pfp-3.png', name: 'Title 6', creator: 'Artist 6', playTime: '02:51' },
  { id: '7', image: '/images/pfp-1.png', name: 'Title 7', creator: 'Artist 7', playTime: '03:31' },
  { id: '8', image: '/images/pfp-2.png', name: 'Title 8', creator: 'Artist 8', playTime: '03:22' },
  { id: '9', image: '/images/pfp-3.png', name: 'Title 9', creator: 'Artist 9', playTime: '04:12' },
  { id: '10', image: '/images/pfp-1.png', name: 'Title 10', creator: 'Artist 10', playTime: '02:32' },
];

const drawerBleeding = 16;

const Root = styled('div')(({ theme }) => ({
  height: '100%',
  backgroundColor: theme.palette.mode === 'light' ? grey[100] : theme.palette.background.default,
}));

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? '#fff' : grey[800],
}));

const Puller = styled(Box)(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
  borderRadius: 3,
  position: 'absolute',
  top: 8,
  left: 'calc(50% - 15px)',
}));

function SwipeableEdgeDrawer(props) {
  const { window } = props;
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <Root>
      <CssBaseline />
      <Global
        styles={{
          '.MuiDrawer-root > .MuiPaper-root': {
            height: `calc(62% - ${drawerBleeding}px)`,
            overflow: 'visible',
          },
        }}
      />
      <SwipeableDrawer
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <StyledBox
          sx={{
            position: 'absolute',
            top: -drawerBleeding,
            visibility: 'visible',
            right: 0,
            left: 0,
          }}
        >
          {!open && (
            <>
              <Puller />
              <Stack direction={'row'} alignItems="center" sx={{ p: 2, backgroundColor: 'rgba(0,0,0,0.88)' }}>
                <div>
                  <img src="/images/pfp-1.png" alt="" style={{ maxWidth: '2rem', overflow: 'hidden' }} />
                </div>
                <Stack direction={'column'} flexGrow={1}>
                  <span style={{ color: 'white', fontWeight: '900', fontSize: '1.1rem' }}>Title 1</span>
                  <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>{`Artist 1 * 03:30`}</span>
                </Stack>
                <Stack alignItems={'center'}>
                  <GrapperIcon />
                </Stack>
              </Stack>
            </>
          )}
        </StyledBox>
        <StyledBox
          sx={{
            pt: 3,
            height: '100%',
            overflow: 'auto',
            backgroundColor: 'rgba(0,0,0,0.88)',
            WebkitOverflowScrolling: 'auto',
          }}
        >
          <Stack direction="column">
            <Puller />
            {playlist.map((v) => (
              <Stack direction={'row'} alignItems="center" key={v.id} sx={{ p: 2 }}>
                <div>
                  <img src={v.image} alt="" style={{ maxWidth: '2rem', overflow: 'hidden' }} />
                </div>
                <Stack direction={'column'} flexGrow={1}>
                  <span style={{ color: 'white', fontWeight: '900', fontSize: '1.1rem' }}>{v.name}</span>
                  <span
                    style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}
                  >{`${v.creator} * ${v.playTime}`}</span>
                </Stack>
                <Stack alignItems={'center'}>
                  <GrapperIcon />
                </Stack>
              </Stack>
            ))}
          </Stack>
        </StyledBox>
      </SwipeableDrawer>
    </Root>
  );
}

SwipeableEdgeDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default SwipeableEdgeDrawer;
