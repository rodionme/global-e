import { Control } from 'react-hook-form';

import { ControlledTextField } from '../ControlledTextField';
import { FormValues } from './Registration';
import { Step } from './Step';

type UserDetailsProps = {
  control: Control<FormValues>;
  onGoForward: () => void;
};

export const AddressDetails = ({ control, onGoForward }: UserDetailsProps) => {
  return (
    <Step title="Address Details" onGoForward={onGoForward}>
      <ControlledTextField
        name="street"
        label="Street"
        control={control}
        autoFocus
      />

      <ControlledTextField name="city" label="City" control={control} />

      <ControlledTextField name="state" label="State" control={control} />

      <ControlledTextField name="zip" label="Zip Code" control={control} />
    </Step>
  );
};
