import { AppBar, Toolbar, IconButton, Typography, Button } from '@mui/material';
import { Menu as MenuIcon, ChevronLeft as ChevronLeftIcon } from '@mui/icons-material';

import { useDrawerContext } from '../contexts/drawer-context';

export const Header = () => {
  const { isOpened, toggleIsOpened } = useDrawerContext();

  return (
    <AppBar
      sx={{ backgroundColor: '#009688', color: 'secondary.contrastText' }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          onClick={() => toggleIsOpened(!isOpened)}

        >
          {isOpened ? <ChevronLeftIcon /> : <MenuIcon />}
        </IconButton>
        <Typography component="div" sx={{ flexGrow: 1, textAlign: 'end' }}>
          <Button sx={{ color: 'white', textTransform: 'none' }}>Home</Button>
          <Button sx={{ color: 'white', textTransform: 'none' }}>My Account</Button>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
