import { Box, SxProps } from '@mui/material';
import React from 'react';

const styles: { [key: string]: SxProps } = {
  container: {
    backgroundColor: '#F5E0E0',
    width: '100%',
    height: '250px',
  },
};

export function Banner() {
  return <Box sx={styles.container} />;
}
