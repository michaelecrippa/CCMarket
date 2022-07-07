import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import { Styles } from "../interfaces/styles";
import { UserAsset, UserProfileDto } from "../models/DTOs/user-profile-dto.model";
import React from 'react';

const styles: Styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: -2,
    justifyContent: 'center'
  },

  card: {
    width: 300,
    margin: 2
  }
}

interface AssetContainerProps {
  assets: UserAsset[];
}

export function AssetContainer({ assets }: AssetContainerProps) {
  return (
    <Container sx={styles.container}>
      {assets.map((asset) => {
        return (
          <Card sx={styles.card}>
            <CardMedia
              component="img"
              image={asset.pictureUri}
              alt={asset.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {asset.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Price: {asset.price}
              </Typography>
            </CardContent>
          </Card>
        );
      })}
    </Container>
  );
}