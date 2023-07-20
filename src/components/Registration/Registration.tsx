import { FormEvent } from 'react';
import { DefaultValues, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { RegistrationResolver } from '../../helpers/validationSchemas';
import { useFormStore } from '../../store';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import Typography from '@mui/material/Typography';
import { Summary } from './Summary';
import { UserDetails } from './UserDetails';
import { AddressDetails } from './AddressDetails';
import { AccountDetails } from './AccountDetails';

export type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  username: string;
  password: string;
};

const defaultValues: DefaultValues<FormValues> = {
  firstName: '',
  lastName: '',
  email: '',
  street: '',
  city: '',
  state: '',
  zip: '',
  username: '',
  password: '',
};

type FormStep = {
  label: string;
  fields: Array<keyof FormValues>;
};

const steps: FormStep[] = [
  { label: 'User Details', fields: ['firstName', 'lastName', 'email'] },
  { label: 'Address Details', fields: ['street', 'city', 'state', 'zip'] },
  { label: 'Account Details', fields: ['username', 'password'] },
  { label: 'Summary', fields: [] },
];

type RegistrationProps = {
  onSubmit: () => void;
};

export const Registration = ({ onSubmit }: RegistrationProps) => {
  const currentStep = useFormStore((state) => state.currentStep);
  const goForward = useFormStore((state) => state.goForward);

  const { getValues, control, getFieldState, trigger } = useForm<FormValues>({
    defaultValues,
    resolver: yupResolver(RegistrationResolver),
    mode: 'all',
  });

  const onGoForward = () => {
    const stepFields = steps[currentStep].fields;

    trigger(stepFields);

    const isStepValid = stepFields.every((field) => {
      const fieldState = getFieldState?.(field);
      const isFieldValid = fieldState?.isDirty && !fieldState.invalid;

      return isFieldValid;
    });

    if (isStepValid) {
      goForward();
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit();
  };

  return (
    <Container component="main" maxWidth="md">
      <Box
        sx={{
          marginY: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h4">
          Sign in
        </Typography>

        <Box
          sx={{
            marginY: 3,
          }}
        >
          <Stepper activeStep={currentStep}>
            {steps.map(({ label }) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>

        <Container component="div" maxWidth="xs">
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ width: '100%', mt: 1 }}
          >
            {currentStep === 0 && (
              <UserDetails control={control} onGoForward={onGoForward} />
            )}

            {currentStep === 1 && (
              <AddressDetails control={control} onGoForward={onGoForward} />
            )}

            {currentStep === 2 && (
              <AccountDetails control={control} onGoForward={onGoForward} />
            )}

            {currentStep === 3 && (
              <Summary userData={getValues()} onGoForward={onGoForward} />
            )}
          </Box>
        </Container>
      </Box>
    </Container>
  );
};
