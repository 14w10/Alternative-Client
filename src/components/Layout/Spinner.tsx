import React from 'react';
import { CircularProgress, Box } from '@mui/material';

const Spinner: React.FC = () => (
  <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    height="100vh"
  >
    <CircularProgress color="primary" />
  </Box>
);

export default Spinner;
