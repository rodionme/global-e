import { ReactNode } from "react";
import styles from "./Registration.module.scss";
import {Stack} from "@mui/material";
import Button from "@mui/material/Button";

type StepProps = {
  children: ReactNode;
};

export const Step = ({ children }: StepProps) => {
  return <div className={styles.Step}>{children}
    <Stack direction="row" justifyContent="space-between">
      <Button>Back</Button>

      <Button variant="contained">Forward</Button>
    </Stack>
  </div>;
};
