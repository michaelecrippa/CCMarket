import { Avatar, Container, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { UserProfileDto } from '../models/DTOs/user-profile-dto.model';
import { userService } from '../services/userService';
import { useCurrentUser } from '../hooks/useCurrentUser';
import { Styles } from '../interfaces/styles';
import { AssetContainer } from '../components/AssetContainer';
import { Header } from '../components/Header';

const styles: Styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid darkgrey',
    alignItems: 'center',
    padding: '24px',
  },

  avatar: {
    width: 70,
    height: 70,
    border: '3px solid green',
  },

  name: {
    marginTop: 2,
    marginBottom: 2,
  },

  bio: {
    width: '30%',
  },

  assetsTitle: {
    marginTop: 5,
  },
};

export function Profile() {
  const [userProfile, setUserProfile] = useState<UserProfileDto | null>(null);
  const currentUser = useCurrentUser();

  useEffect(() => {
    async function loadProfile() {
      if (currentUser) {
        const profile = await userService.getUserById(currentUser.id);
        setUserProfile(profile);
      }
    }
    setTimeout(loadProfile, 1500);
  }, []);

  if (!userProfile) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <Container sx={styles.container}>
        <Avatar src={userProfile.profilePicture} sx={styles.avatar}></Avatar>
        <Typography variant="h4" component="h1" sx={styles.name}>
          {userProfile.username}
        </Typography>
        <Typography variant="subtitle1" component="p" sx={styles.bio}>
          {userProfile.bio}{' '}
        </Typography>
        <Typography variant="h5" component="h2" sx={styles.assetsTitle}>
          Assets
        </Typography>
        <AssetContainer assets={userProfile.assets}></AssetContainer>
      </Container>
    </>
  );
}
