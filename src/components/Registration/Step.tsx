import {ReactNode} from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import {useFormStore} from "../../store";
import {MAX_STEP, MIN_STEP} from "../../constants";

import styles from "./Registration.module.scss";

import Validator from "../../helpers/Validator";

type StepProps = {
  title: string;
  children: ReactNode;
};

export const Step = ({title, children}: StepProps) => {
  const userData = useFormStore((state) => state.userData);
  const isUserDataValid = useFormStore((state) => state.isUserDataValid);
  const setUserDataValid = useFormStore((state) => state.setUserDataValid);
  const currentStep = useFormStore((state) => state.currentStep)
  const goBack = useFormStore((state) => state.goBack)
  const goForward = useFormStore((state) => state.goForward)

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return Validator.validateFirstName(userData.firstName) &&
          Validator.validateLastName(userData.lastName) &&
          Validator.validateEmail(userData.email);

      case 2:
        return Validator.validateStreet(userData.street) &&
          Validator.validateCity(userData.city) &&
          Validator.validateState(userData.state) &&
          Validator.validateZip(userData.zip);

      case 3:
        return Validator.validateUsername(userData.username) &&
          Validator.validatePassword(userData.password);

      default:
        return true;
    }
  };

  const onGoForward = (): void => {
    const isDataValid = isStepValid();

    setUserDataValid(isDataValid);

    if (isDataValid) {
      goForward();
    }
  }

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

    {!isUserDataValid && <Typography component="span" color="red">
      This step is invalid!
    </Typography>}

    <Stack direction="row" justifyContent="space-between">
      <Button disabled={currentStep === MIN_STEP} onClick={goBack}>Back</Button>

      <Button
        type={currentStep === MAX_STEP ? "submit" : "button"}
        variant="contained"
        onClick={onGoForward}>
        {currentStep === MAX_STEP ? 'Submit' : 'Forward'}
      </Button>
    </Stack>
  </div>;
};
