import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { Container, FormControl, Button, InputAdornment, TextField } from '@mui/material';
import { Forward, VpnKeyOutlined, AccountCircle } from '@mui/icons-material';

import { authService } from '../services/authService';

export default function Login(): JSX.Element {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  async function submit(event: FormEvent) {
    event.preventDefault();

    if(username && password){
      try {
        await authService.login({ email: username, password });
        navigate('../');
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
            name='username'
            id='input-email/username'
            placeholder='Email'
            type='username'
            value={username}
            InputProps={{
              startAdornment: (
              <InputAdornment position='start'>
                <AccountCircle />
              </InputAdornment>
              )
            }}
            inputProps={{'variant': 'outlined'}}
            onChange={event => setUsername(event.target.value)}
          />
          <TextField
            name='password'
            id='input-password'
            placeholder='Password'
            type='password'
            value={password}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <VpnKeyOutlined />
                </InputAdornment>
              )
            }}
            inputProps={{'variant': 'outlined'}}
            onChange={event => setPassword(event.target.value)}
          />
          <Button 
            type='submit'
            variant='contained'
            color="primary"
            startIcon={<Forward/>}
            onClick={submit}
          > Log in </Button>
        </FormControl>
      </form>
    </Container>
  );
}