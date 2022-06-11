import { Box, Drawer, IconButton, Stack } from '@mui/material';
import { ChevronLeft as ChevronLeftIcon } from '@icons/chevron-left';

interface MyProfileSideBarProps {
  onClose: () => void;
  open: boolean;
}

export const MyProfileSideBar = ({ onClose, open }: MyProfileSideBarProps) => {
  return (
    <Drawer
      anchor="right"
      PaperProps={{
        sx: { width: '100%' },
      }}
      onClose={onClose}
      open={open}
    >
      <Stack sx={{ padding: '1rem' }}>
        <div className="fixed">
          <IconButton onClick={onClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <div>My Profile Sidebar</div>
      </Stack>
    </Drawer>
  );
};
