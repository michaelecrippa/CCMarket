import React, { FormEvent, useState } from 'react';

import { userService } from '../services/userService';

import { Button, CircularProgress, Container, TextField, Typography, MenuItem} from '@mui/material';

const genders = [
  {key: 1, value: 'Female'},
  {key: 2, value: 'Male'},
  {key: 3, value: 'Other'},
];

const nations = [
  {key: 1, value: 'Bulgarian'},
  {key: 2, value: 'Italian'},
  //TODO and extract
]

interface UserInformation {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  sex: string;
  nationality: string;
}

export default function Register() {
  let loading = false; // TODO show loading indicator until response received

  const [userInformation, setUserInformation] = useState({
    name: '',
    email:'',
    password:'',
    confirmPassword: '',
    sex: '',
    nationality: ''
  } as UserInformation);

  async function submit(event: FormEvent) {
    event.preventDefault();

    await userService.createUser(userInformation);
  }

  function handleFormFieldUpdate(inputFieldName: keyof UserInformation) { 
    return (valueUpdatedEvent: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setUserInformation(userInformation => {
        userInformation[inputFieldName] = valueUpdatedEvent.target.value;
        return userInformation;
      })
    }
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
          onChange={handleFormFieldUpdate('name')} />

        <TextField
          label="Email"
          type='email'
          onChange={handleFormFieldUpdate('email')}
        />

        <TextField
          label="Password"
          onChange={handleFormFieldUpdate('password')}
          type='password'
        />

        <TextField
          label="Confirm password"
          onChange={handleFormFieldUpdate('confirmPassword')}
          type='password'
        />

        <TextField
          label="Gender"
          onChange={handleFormFieldUpdate('sex')}
          select
        > 
          {genders.map((option) => (
            <MenuItem key={option.key} value={option.value}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          label="Nationality"
          onChange={handleFormFieldUpdate('nationality')}
          select
        > 
          {nations && nations.map((option) => (
            <MenuItem key={option.key} value={option.value}>
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
