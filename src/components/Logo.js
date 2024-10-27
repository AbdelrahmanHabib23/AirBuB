import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// React icons
import { FaAirbnb } from 'react-icons/fa';
import { flexCenter } from '../themes/commonStyles';
import { pink } from '@mui/material/colors';

const Logo = () => {
  return (
    <Box sx={flexCenter}>
      <FaAirbnb 
        size={40} // Default size
        color={pink[500]} 
        sx={{ 
          display: { xs: 'none', sm: 'block' } // Hide on small screens if necessary
        }} 
      />
      <Typography
        sx={{
          ml: 1,
          color: (theme) => theme.palette.secondary.main,
          fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.8rem' }, // Responsive font size
          fontWeight: 'bold',
        }}
        component="h3"
      >
        airBnB
      </Typography>
    </Box>
  );
};

export default Logo;
