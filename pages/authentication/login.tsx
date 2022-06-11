import { NextPage } from 'next';
import { Box, Card, Container, Divider, Link, Typography } from '@mui/material';
import { JWTLogin } from '../../components/authentication/jwt-login';
import { Page } from '../../types/page';

const Login: Page = () => {
  return (
    <Box>
      <JWTLogin />
    </Box>
  );
};

export default Login;
