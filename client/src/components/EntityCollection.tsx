import { Grid, SxProps } from '@mui/material';
import React from 'react';
import { Entity } from '../services/entityService';
import { EntityCard } from './EntityCard';

const styles: { [key: string]: SxProps } = {
  container: {
    display: 'grid',
    justifyContent: 'space-between',
    gridTemplateColumns: 'repeat(4, 1fr)',
    justifyItems: 'center',
    gap: '20px',
    marginTop: '10px',
    marginBottom: '10px',
  },
};

interface EntityCollectionProps {
  entities: Entity[];
}

export function EntityCollection({ entities }: EntityCollectionProps) {
  return (
    <Grid container sx={styles.container}>
      {entities.map(entity => (
        <Grid item key={entity.id}>
          <EntityCard entity={entity} />
        </Grid>
      ))}
    </Grid>
  );
}
