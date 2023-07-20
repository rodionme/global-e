import { Control, Controller, FieldPath, FieldValues } from 'react-hook-form';

import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

type ControlledTextFieldProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
> = {
  control: Control<TFieldValues>;
  name: TName;
  label: string;
  autoFocus?: boolean;
};

export const ControlledTextField = <
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
>({
  control,
  name,
  label,
  autoFocus = false,
}: ControlledTextFieldProps<TFieldValues, TName>) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <>
          <TextField
            margin="normal"
            required
            fullWidth
            id={name}
            label={label}
            autoFocus={autoFocus}
            value={value}
            onChange={onChange}
          />

          {error && (
            <Typography component="h6" color="red">
              {error.message}
            </Typography>
          )}
        </>
      )}
    />
  );
};
