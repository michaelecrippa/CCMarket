import { Box } from '@mui/material';
import React, { ReactNode } from 'react';
import { Styles } from '../interfaces/styles';

const styles: Styles = {
  container: {
    backgroundColor: '#F5E0E0',
    width: '100%',
    height: '250px',
  },
};

interface BannerProps {
  children?: ReactNode;
}

export function Banner({ children }: BannerProps) {
  return <Box sx={styles.container}>{children}</Box>;
}
