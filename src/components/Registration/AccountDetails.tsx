import { Control } from 'react-hook-form';

import { ControlledTextField } from '../ControlledTextField';
import { FormValues } from './Registration';
import { Step } from './Step';

type UserDetailsProps = {
  control: Control<FormValues>;
  onGoForward: () => void;
};

export const AccountDetails = ({ control, onGoForward }: UserDetailsProps) => {
  return (
    <Step title="Account Details" onGoForward={onGoForward}>
      <ControlledTextField
        name="username"
        label="Username"
        control={control}
        autoFocus
      />

      <ControlledTextField name="password" label="Password" control={control} />
    </Step>
  );
};
