import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

type SummaryFieldProps = {
  title: string;
  value: string;
};

export const SummaryField = ({ title, value }: SummaryFieldProps) => {
  return (
    <Typography component="div">
      <Box fontWeight="fontWeightBold" display="inline">
        {title}:
      </Box>{' '}
      {value}
    </Typography>
  );
};
