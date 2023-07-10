import {FormEvent} from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import {Step} from "./Step";
import {SummaryField} from "./SummaryField";

import {useFormStore} from "../../store";

import styles from './Registration.module.scss';

export const Registration = () => {
  const userData = useFormStore((state) => state.userData);
  const currentStep = useFormStore((state) => state.currentStep);
  const changeUserData = useFormStore((state) => state.changeUserData);

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

        <Box component="form" onSubmit={handleSubmit} noValidate sx={{width: "100%", mt: 1}}>
          {currentStep === 1 && <Step title="User Details">
            <TextField
              margin="normal"
              required
              fullWidth
              id="first-name"
              label="First Name"
              name="first-name"
              autoFocus
              onChange={(event) => changeUserData('firstName', event.currentTarget.value)}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              id="last-name"
              label="Last Name"
              name="last-name"
              onChange={(event) => changeUserData('lastName', event.currentTarget.value)}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              onChange={(event) => changeUserData('email', event.currentTarget.value)}
            />
          </Step>}

          {currentStep === 2 && <Step title="Address Details">
            <TextField
              margin="normal"
              required
              fullWidth
              id="street"
              label="Street"
              name="street"
              autoFocus
              onChange={(event) => changeUserData('street', event.currentTarget.value)}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              id="city"
              label="City"
              name="city"
              onChange={(event) => changeUserData('city', event.currentTarget.value)}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              id="state"
              label="State"
              name="state"
              onChange={(event) => changeUserData('state', event.currentTarget.value)}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              id="zip"
              label="Zip Code"
              name="zip"
              onChange={(event) => changeUserData('zip', event.currentTarget.value)}
            />
          </Step>}

          {currentStep === 3 && <Step title="Account Details">
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              onChange={(event) => changeUserData('username', event.currentTarget.value)}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={(event) => changeUserData('password', event.currentTarget.value)}
            />
          </Step>}

          {currentStep === 4 && <Step title="Summary">
            <SummaryField title="First Name" value={userData.firstName} />
            <SummaryField title="Last Name" value={userData.lastName} />
            <SummaryField title="Email" value={userData.email} />
            <SummaryField title="Street" value={userData.street} />
            <SummaryField title="City" value={userData.city} />
            <SummaryField title="State" value={userData.state} />
            <SummaryField title="Zip" value={userData.zip} />
            <SummaryField title="Username" value={userData.username} />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{mt: 3, mb: 2}}
            >
              Sign In
            </Button>
          </Step>}
        </Box>
      </Box>
    </Container>
  </div>;
};
