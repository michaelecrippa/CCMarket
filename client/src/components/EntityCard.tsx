import { Grid, SxProps, Typography } from '@mui/material';
import React from 'react';
import { Entity } from '../services/entityService';

const styles: { [key: string]: SxProps } = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '4px',
    border: 'ridge',
    gap: '10px',
  },
};

interface EntityCardProps {
  entity: Entity;
}

export function EntityCard({ entity }: EntityCardProps) {
  return (
    <Grid container sx={styles.container}>
      <Grid item>
        <img src={entity.imageUrl} alt={entity.name} width="250px" height="200px" />
      </Grid>
      <Grid item>
        <Typography variant="subtitle1">{entity.name}</Typography>
      </Grid>
      <Grid item>
        <Typography variant="body1">{entity.ownerName}</Typography>
      </Grid>
      <Grid item>
        <Typography variant="body2">{entity?.description}</Typography>
      </Grid>
    </Grid>
  );
}
