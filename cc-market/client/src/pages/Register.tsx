import { FormEvent, useState } from 'react';

import { authService } from '../services/authService';

import { Button, CircularProgress, Container, TextField, Typography, MenuItem} from '@mui/material';

const genders = [
  {value: 'Female'},
  {value: 'Male'},
  {value: 'Other'},
];

const nations = [
  {value: 'Bulgarian'},
  {value: 'Italian'},
  //TODO and extract
]

export default function Register() {
  const loading = true; // TODO

  const [userValues, setUserValues] = useState({
    name: '',
    email:'',
    password:'',
    confirmPassword: '',
    sex: '',
    nationality: ''
  });

  async function submit(event: FormEvent) {
    event.preventDefault();

    //TODO
    await authService.Register(userValues);
  }

  return (
     <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h4"
          align="center">Sign up
        </Typography>

       <form onSubmit={submit}>
         <TextField
          label="Name"
          value={userValues.name} />

        <TextField
          label="Email"
          value={userValues.email}
        />

        <TextField
          label="Password"
          value={userValues.password}
          type='password'
        />

        <TextField
          label="Confirm password"
          value={userValues.confirmPassword}
          type='password'
        />

        <TextField
          label="Gender"
          value={userValues.sex}
          select
        > 
          {genders.map((option) => (
            <MenuItem value={option.value}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          label="Nationality"
          value={userValues.nationality}
          select
        > 
          {nations && nations.map((option) => (
            <MenuItem value={option.value}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>

        <Button type="submit" variant="contained" disabled={loading}>
          {loading ? <CircularProgress /> : 'Submit'}
        </Button>
      </form>
    </Container>
  );
}
