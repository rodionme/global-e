import { FormEvent } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import {useFormStore} from "../../store";

import styles from './Registration.module.scss';
import {Step} from "./Step";

export const Registration = () => {
  const currentStep = useFormStore((state) => state.currentStep)
  const goBack = useFormStore((state) => state.goBack)
  const goForward = useFormStore((state) => state.goForward)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // console.log({
    //   email: data.get('email'),
    //   password: data.get('password'),
    // });
  };

  return <div className={styles.Registration}>
    <Container component="main" maxWidth="xs">
      <CssBaseline />

      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h4">
          Sign in
        </Typography>

        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <Step>
            <Typography component="h2" variant="h6">
              User Details
            </Typography>

            <TextField
              margin="normal"
              required
              fullWidth
              id="first-name"
              label="First Name"
              name="first-name"
              autoFocus
            />

            <TextField
              margin="normal"
              required
              fullWidth
              id="last-name"
              label="Last Name"
              name="last-name"
            />

            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
            />
          </Step>

          <Step>
            <Typography component="h2" variant="h6">
              Address Details
            </Typography>

            <TextField
              margin="normal"
              required
              fullWidth
              id="street"
              label="Street"
              name="street"
              autoFocus
            />

            <TextField
              margin="normal"
              required
              fullWidth
              id="city"
              label="City"
              name="city"
            />

            <TextField
              margin="normal"
              required
              fullWidth
              id="state"
              label="State"
              name="state"
            />

            <TextField
              margin="normal"
              required
              fullWidth
              id="zip"
              label="Zip Code"
              name="zip"
            />
          </Step>

          <Step>
            <Typography component="h2" variant="h6">
              Account Details
            </Typography>

            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
            />

            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
            />
          </Step>

          <Step>
            <Typography component="h2" variant="h6">
              Summary
            </Typography>

            Summary info will be here

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Step>
        </Box>
      </Box>
    </Container>
  </div>;
};
