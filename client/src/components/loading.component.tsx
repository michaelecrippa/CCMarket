import { Box, CircularProgress } from '@mui/material';

import { LoadingProps } from '../interfaces/components/Loading.interface';

export function Loading<T>({ loading, error, children }: LoadingProps<T>) {
  if (loading) {
    return (
      <Box m={4} textAlign="center">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return <Box m={4} textAlign="center" color="red">{error.message}</Box>;
  }

  return <>{children}</>;
}