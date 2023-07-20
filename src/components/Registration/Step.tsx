import { ReactNode } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { useFormStore } from '../../store';
import { MAX_STEP, MIN_STEP } from '../../constants';

type StepProps = {
  title: string;
  children: ReactNode;
  onGoForward: () => void;
};

export const Step = ({ title, children, onGoForward }: StepProps) => {
  const currentStep = useFormStore((state) => state.currentStep);
  const goBack = useFormStore((state) => state.goBack);

  return (
    <div>
      <Box
        sx={{
          marginTop: 2,
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography component="h2" variant="h6">
            {title}
          </Typography>
        </Stack>
      </Box>

      {children}

      <Box
        sx={{
          marginTop: 2,
        }}
      >
        <Stack direction="row" justifyContent="space-between">
          <Button
            sx={{
              visibility: currentStep === MIN_STEP ? 'hidden' : 'visible',
            }}
            onClick={goBack}
          >
            Back
          </Button>

          <Button
            type={currentStep === MAX_STEP ? 'submit' : 'button'}
            variant="contained"
            onClick={onGoForward}
          >
            {currentStep === MAX_STEP ? 'Submit' : 'Forward'}
          </Button>
        </Stack>
      </Box>
    </div>
  );
};
