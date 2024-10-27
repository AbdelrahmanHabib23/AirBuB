import React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
// react icons
import { BsGlobe } from 'react-icons/bs';
import { IoChevronUpOutline } from 'react-icons/io5';

import {
  flexBetweenCenter,
  justifyCenter,
  fullWidthFlex,
} from '../themes/commonStyles.js';

const footerLinks = [
  { id: 1, text: 'Privacy', url: '#' },
  { id: 2, text: 'Terms', url: '#' },
  { id: 3, text: 'Sitemap', url: '#' },
  { id: 4, text: 'Destinations', url: '#' },
];

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        ...fullWidthFlex,
        borderTop: '1px solid #ddd',
        py: 2,
        bgcolor: 'background.paper',
      }}
    >
      <Container maxWidth="xl">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
          sx={{
            width: '100%',
            flexWrap: 'wrap',
          }}
        >
          <Stack direction="row" spacing={2} alignItems="center">
            <Paper elevation={0} sx={{ p: 1, bgcolor: 'transparent' }}>
              <Link href="#" underline="hover" color="text.secondary">
                &copy; 2022 Airbnb
              </Link>
            </Paper>
            {footerLinks.map((link) => (
              <Paper key={link.id} elevation={0} sx={{ p: 1, bgcolor: 'transparent' }}>
                <Link href={link.url} underline="hover" color="text.secondary">
                  {link.text}
                </Link>
              </Paper>
            ))}
          </Stack>

          <Stack direction="row" spacing={1} alignItems="center">
            <Button startIcon={<BsGlobe size={24} />} aria-label="Language selection">
              English (CA)
            </Button>
            <Button aria-label="Currency selection"> $CAD </Button>
            <Button endIcon={<IoChevronUpOutline size={24} />} aria-label="Support and Resources">
              Support & Resources
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
