import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { FaAirbnb } from 'react-icons/fa';
import { useTheme } from '@mui/material/styles';
import { flexCenter } from '../themes/commonStyles';

const Logo = () => {
  const theme = useTheme();

  return (
    <Box sx={{ ...flexCenter }} aria-label="Airbnb Logo">
      <FaAirbnb size={40} color={theme.palette.secondary.main} />
      <Typography
        variant="h6"
        component="h1"
        sx={{
          ml: 1,
          color: theme.palette.secondary.main,
          fontWeight: 'bold',
          fontFamily: theme.typography.fontFamily,
        }}
      >
        airBnB
      </Typography>
    </Box>
  );
};

export default Logo;
