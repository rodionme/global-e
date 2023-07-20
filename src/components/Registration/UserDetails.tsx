import { Control } from 'react-hook-form';

import { ControlledTextField } from '../ControlledTextField';
import { FormValues } from './Registration';
import { Step } from './Step';

type UserDetailsProps = {
  control: Control<FormValues>;
  onGoForward: () => void;
};

export const UserDetails = ({ control, onGoForward }: UserDetailsProps) => {
  return (
    <Step title="User Details" onGoForward={onGoForward}>
      <ControlledTextField
        name="firstName"
        label="First Name"
        control={control}
        autoFocus
      />

      <ControlledTextField
        name="lastName"
        label="Last Name"
        control={control}
      />

      <ControlledTextField name="email" label="Email" control={control} />
    </Step>
  );
};
