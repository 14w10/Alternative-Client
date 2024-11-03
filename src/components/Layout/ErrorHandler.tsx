import { useEffect, useState } from 'react';
import { Container, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ErrorHandlerPage = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    const timer = setTimeout(() => {
      navigate('/');
      window.location.reload();
    }, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [navigate]);

  return (
    <Container component="main" maxWidth="xs" style={{ textAlign: 'center', marginTop: '20vh' }}>
      <Box>
        <Typography variant="h4" component="h1" gutterBottom>
          Oops! Something went wrong.
        </Typography>
        <Typography variant="body1" gutterBottom>
          The page you're looking for doesn't exist or an unexpected error has occurred.
        </Typography>
        <Typography variant="body2" gutterBottom>
          Redirecting to the homepage in {countdown} seconds...
        </Typography>
      </Box>
    </Container>
  );
};

export default ErrorHandlerPage;
