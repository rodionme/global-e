import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export const Success = () => {
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: 20,
        }}
      >
        <Typography component="h1" variant="h4" color="green">
          Success!
        </Typography>
      </Box>
    </Container>
  );
};
