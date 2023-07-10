import {ReactNode} from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import {useFormStore} from "../../store";
import {MAX_STEP, MIN_STEP} from "../../constants";

import styles from "./Registration.module.scss";

type StepProps = {
  title: string;
  children: ReactNode;
};

export const Step = ({title, children}: StepProps) => {
  const currentStep = useFormStore((state) => state.currentStep)
  const goBack = useFormStore((state) => state.goBack)
  const goForward = useFormStore((state) => state.goForward)

  return <div className={styles.Step}>
    <Box
      sx={{
        marginTop: 2,
      }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography component="h2" variant="h6">
          {title}
        </Typography>

        <Typography component="span">
          Step {currentStep} of {MAX_STEP}
        </Typography>
      </Stack>
    </Box>

    {children}

    <Stack direction="row" justifyContent="space-between">
      <Button disabled={currentStep === MIN_STEP} onClick={goBack}>Back</Button>

      <Button variant="contained" onClick={goForward}>{currentStep === MAX_STEP ? 'Submit' : 'Forward'}</Button>
    </Stack>
  </div>;
};
