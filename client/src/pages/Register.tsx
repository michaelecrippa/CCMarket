import React, { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { userService } from '../services/userService';
import PagesUriConstnts from '../constants/uriConstants';

import { Button, CircularProgress, Container, TextField, Typography, MenuItem, Link } from '@mui/material';

const genders = [
  { key: 1, value: 'Female' },
  { key: 2, value: 'Male' },
  { key: 3, value: 'Other' },
];

const nations = [
  { key: 1, value: 'Bulgarian' },
  { key: 2, value: 'Italian' },
  //TODO and extract
];

interface UserInformation {
  userName: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  sex: string;
  nationality: string;
}

export function Register() {
  let loading = false; // TODO show loading indicator until response received

  const navigate = useNavigate();
  const [userInformation, setUserInformation] = useState({
    userName: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    sex: '',
    nationality: '',
  } as UserInformation);

  async function submit(event: FormEvent) {
    event.preventDefault();

    if (await userService.createUser(userInformation)) {
      navigate(PagesUriConstnts.LoginUri);
    }
    // TODO add some error handling and notify the user
  }

  function handleFormFieldUpdate(inputFieldName: keyof UserInformation) {
    return (valueUpdatedEvent: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setUserInformation(userInformation => {
        userInformation[inputFieldName] = valueUpdatedEvent.target.value;
        return userInformation;
      });
    };
  }

  return (
    <Container maxWidth="sm">
      <Typography component="h1" variant="h4" align="center">
        Sign up
      </Typography>

      <form onSubmit={submit}>
        <TextField required label="Username" onChange={handleFormFieldUpdate('userName')} />

        <TextField label="First Name" onChange={handleFormFieldUpdate('firstName')} />

        <TextField label="Last Name" onChange={handleFormFieldUpdate('lastName')} />

        <TextField required label="Email" type="email" onChange={handleFormFieldUpdate('email')} />

        <TextField required label="Password" onChange={handleFormFieldUpdate('password')} type="password" />

        <TextField required label="Confirm password" onChange={handleFormFieldUpdate('confirmPassword')} type="password" />

        <TextField label="Gender" onChange={handleFormFieldUpdate('sex')} select>
          {genders.map(option => (
            <MenuItem key={option.key} value={option.value}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>

        <TextField label="Nationality" onChange={handleFormFieldUpdate('nationality')} select>
          {nations &&
            nations.map(option => (
              <MenuItem key={option.key} value={option.value}>
                {option.value}
              </MenuItem>
            ))}
        </TextField>

        <Button type="submit" variant="contained" disabled={loading}>
          {loading ? <CircularProgress /> : 'Submit'}
        </Button>
      </form>

      <Link href={PagesUriConstnts.LoginUri} variant="body2">
        Already registered? Login now!
      </Link>
    </Container>
  );
}
