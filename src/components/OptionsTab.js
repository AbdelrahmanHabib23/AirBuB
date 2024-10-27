import React from 'react';
import Box from '@mui/material/Box';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
// react icons
import { FaFilter } from 'react-icons/fa';
import { locationsTab } from '../data/mock-data';

const OptionsTab = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          px: { xs: 0, md: 2 },
          mt: 2,
          mb: 2,
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          aria-label="Location Options Tabs"
          sx={{
            flexGrow: 1,
            [`& .${tabsClasses.scrollButtons}`]: {
              '&.Mui-disabled': { opacity: 0.3 },
            },
          }}
        >
          {locationsTab.map((tab) => (
            <Tab key={tab.id} icon={tab.icon} label={tab.label} />
          ))}
        </Tabs>
        <Button
          variant="outlined"
          startIcon={<FaFilter />}
          sx={{
            display: { xs: 'none', md: 'flex' },
            minWidth: 90,
            ml: 2,
            borderRadius: 2,
            textTransform: 'capitalize',
            color: 'text.primary',
            borderColor: 'divider',
          }}
        >
          Filters
        </Button>
      </Box>
    </Container>
  );
};

export default OptionsTab;
