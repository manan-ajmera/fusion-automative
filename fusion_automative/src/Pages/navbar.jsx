import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md')); // Check if the screen size is mobile

  return (
    <AppBar position="fixed" sx={{ background: 'linear-gradient(to right, #1f2937, #374151)' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Left Section: Logo and Name */}
        <Box display="flex" alignItems="center">
          <img
            src="./assets/logo.png"
            alt="Fusion Automation Logo"
            style={{
              height: '48px',
              width: 'auto',
              border: '2px solid white',
              borderRadius: '50%',
              padding: '4px',
            }}
          />
          <Typography variant="h6" component="div" sx={{ ml: 2, fontWeight: 'bold' }}>
            Fusion Automation
          </Typography>
        </Box>

        {/* Right Section: GST Number and Navigation Links */}
        <Box display="flex" flexDirection="column" alignItems="flex-end">
          {/* GST Number */}
          <Typography variant="body2" sx={{ color: '#d1d5db' }}>
            GST No. 24EOCPP0425Q1ZP
          </Typography>

          {/* Navigation Links */}
          <Box
            display={isMobile ? 'none' : 'flex'}
            sx={{ mt: 1, gap: 2 }}
          >
            <Button href="#about" sx={{ color: '#d1d5db', fontWeight: 'medium' }}>
              About
            </Button>
            <Button href="#services" sx={{ color: '#d1d5db', fontWeight: 'medium' }}>
              Services
            </Button>
            <Button href="#team" sx={{ color: '#d1d5db', fontWeight: 'medium' }}>
              Team
            </Button>
            <Button href="#contact" sx={{ color: '#d1d5db', fontWeight: 'medium' }}>
              Contact
            </Button>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;