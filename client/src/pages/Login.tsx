import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Container, FormControl, Button, InputAdornment, TextField, Link } from '@mui/material';
import { Forward, VpnKeyOutlined, AccountCircle } from '@mui/icons-material';

import { authService } from '../services/authService';
import { UserDTO } from '../models/DTOs/userDTO.model';
import PagesUriConstnts from '../constants/uriConstants';

export function Login(): JSX.Element {
  const [userLoginData, setUserData] = useState(new UserDTO());

  function setEmail(email: string) {
    setUserData({ email, password: userLoginData.password });
  }
  function setPassword(password: string) {
    setUserData({ email: userLoginData.email, password });
  }

  const navigate = useNavigate();

  async function submit(event: FormEvent) {
    event.preventDefault();

    if (userLoginData.email && userLoginData.password) {
      try {
        await authService.login(userLoginData);

        navigate(PagesUriConstnts.IndexUri);
      } catch (error) {
        console.error(error);
      }
    }
  }

  return (
    <Container>
      <form>
        <FormControl>
          <TextField
            name="username"
            id="input-email/username"
            placeholder="Email"
            type="username"
            value={userLoginData.email}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
            inputProps={{ variant: 'outlined' }}
            onChange={event => setEmail(event.target.value)}
          />
          <TextField
            name="password"
            id="input-password"
            placeholder="Password"
            type="password"
            value={userLoginData.password}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <VpnKeyOutlined />
                </InputAdornment>
              ),
            }}
            inputProps={{ variant: 'outlined' }}
            onChange={event => setPassword(event.target.value)}
          />
          <Button type="submit" variant="contained" color="primary" startIcon={<Forward />} onClick={submit}>
            {' '}
            Log in{' '}
          </Button>
        </FormControl>
      </form>

      <Link href={PagesUriConstnts.RegisterUri} variant="body2">
        New here? Register now!
      </Link>
    </Container>
  );
}
