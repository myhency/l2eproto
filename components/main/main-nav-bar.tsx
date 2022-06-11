import { AppBar, Box, Button, Fade, Toolbar, useScrollTrigger } from '@mui/material';
import { Container } from '@mui/system';
import { ShoppingCart as ShoppingCartIcon } from '@icons/shopping-cart';
import { AcademicCap as AcademicCapIcon } from '@icons/academic-cap';
import { Archive as ArchiveIcon } from '@icons/archive';
import { VolumeUp as VolumeUpIcon } from '@icons/volume-up';

interface MainNavBarProps {
  onOpenMyProfile: () => void;
  onOpenMyWallet: () => void;
}

function ScrollTop() {
  const trigger = useScrollTrigger({ threshold: 10 });

  return (
    <Fade in={!trigger}>
      <Box
        sx={{
          position: 'fixed',
          bottom: 30,
          right: 0,
          left: 0,
          zIndex: 10,
          padding: '4px 16px 4px 16px',
          marginRight: '1rem',
          marginLeft: '1rem',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            backgroundColor: 'lightgray',
            borderRadius: '18px',
            minHeight: '6vh',
          }}
        >
          <Button>
            <VolumeUpIcon />
          </Button>
          <Button>
            <ArchiveIcon />
          </Button>
          <Button>
            <AcademicCapIcon />
          </Button>
          <Button>
            <ShoppingCartIcon />
          </Button>
        </Box>
      </Box>
    </Fade>
  );
}

export const MainNavBar = ({ onOpenMyProfile, onOpenMyWallet }: MainNavBarProps) => {
  return (
    <>
      <AppBar elevation={0} position="fixed" sx={{ userDrag: 'none' }}>
        <Container>
          <Toolbar disableGutters sx={{ minHeight: 64 }}>
            <Box sx={{ display: 'flex' }}>
              <div onClick={onOpenMyProfile}>MyProfile</div>
            </Box>
            <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'end' }}>
              <div onClick={onOpenMyWallet}>Wallet</div>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <ScrollTop />
    </>
  );
};
