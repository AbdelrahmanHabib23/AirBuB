import React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import { FaSearch } from 'react-icons/fa';
import { VscSettings } from 'react-icons/vsc';

const MobileSearch = () => {
  return (
    <Paper
      component="form"
      sx={{
        p: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: { xs: '100%', sm: 'auto' }, // Full width on small screens, auto on larger screens
        border: '1px solid #ccc',
        borderRadius: 20,
        boxShadow: 1, // Optional: Add shadow for better visual separation
      }}
    >
      <IconButton sx={{ p: '10px' }} aria-label="search">
        <FaSearch />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Where to?"
        inputProps={{ 'aria-label': 'search input' }} // Accessibility improvement
      />
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="settings">
        <VscSettings />
      </IconButton>
    </Paper>
  );
};

export default MobileSearch;
