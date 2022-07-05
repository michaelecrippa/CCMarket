import { Avatar, Button, Card, CardActions, CardContent, CardMedia, Container, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { UserProfileDto } from '../models/DTOs/user-profile-dto.model';
import { userService } from '../services/userService';
import { useCurrentUser } from '../hooks/useCurrentUser';

function Profile() {
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
    return (<div>Loading...</div>);
  }

  return (
    <Container sx={{ display: 'flex', flexDirection: 'column', border: '1px solid darkgrey', alignItems: 'center', padding: '24px' }}>
      <Avatar src={userProfile.profilePicture} sx={{ width: 70, height: 70, border: '3px solid green' }}></Avatar>
      <Typography variant='h4' component='h1' sx={{ marginTop: 2, marginBottom: 2 }}>{userProfile.username}</Typography>
      <Typography variant='subtitle1' component='p' sx={{ width: '35%' }}>{userProfile.bio} </Typography>
      {/* Implement Assets For Sale and Assets tabs using https://mui.com/material-ui/react-tabs/ */}
      <Typography variant='h5' component='h2' sx={{ marginTop: 5 }}>Assets</Typography>
      <Container sx={{ display: 'flex', flexWrap: 'wrap', padding: -2, justifyContent: 'center' }}>
        {userProfile.assets?.map((asset) => {
          return (
            <Card sx={{ width: 300, margin: 2 }}>
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
    </Container>
  );
}

export default Profile;