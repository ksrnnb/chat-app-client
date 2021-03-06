
import * as React from 'react';
import Alert from '@mui/material/Alert';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import axios from 'axios';
import { useAuth, User } from '../auth/ProvideAuth';
import { loginEndpoint, tokenEndpoint } from '../route';
import { LoginResponse } from '../response/LoginResponse';
import { TokenResponse } from '../response/TokenResponse';
import { LoginRequest } from '../request/LoginRequest';

export default function Login() {
  const loginIdName = 'login-id';
  const passwordName = 'password';

  const [isValidLoginId, setValidLoginId] = React.useState(true);
  const [isValidPassword, setValidPassword] = React.useState(true);
  const [errorMessage, setErrorMessage] = React.useState('');

  const auth = useAuth();

  const getFormData = (event: React.FormEvent<HTMLFormElement>) => {
    const data = new FormData(event.currentTarget);

    let loginId = data.get(loginIdName);
    let password = data.get(passwordName);

    loginId = loginId ? loginId.toString() : '';
    password = password ? password.toString() : '';

    return [loginId, password];
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setErrorMessage('');
    if (event.target.name === loginIdName) {
      if (event.target.value === '') {
        setValidLoginId(false);
        return;
      }
      setValidLoginId(true);
    }

    if (event.target.name === passwordName) {
      if (event.target.value === '') {
        setValidPassword(false);
        return;
      }
      setValidPassword(true);
    }
  }

  const doLogin = async (params: LoginRequest) => {
    const res = await axios.get<TokenResponse>(tokenEndpoint, { withCredentials: true });
    params.token = res.data.token;

    return axios.post<LoginResponse>(loginEndpoint, params, { withCredentials: true });
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const [loginId, password] = getFormData(event);
    const req: LoginRequest = { loginId: loginId, password: password };

    let res;
    try {
      res = await doLogin(req);
    } catch (errorRes) {
      setErrorMessage('?????????????????????????????????????????????');
      return;
    }

    const user: User = {
      id: res.data.id,
    };

    auth.signIn(user);
  };

  return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: '#1976d2' }}>
          </Avatar>
          <Typography component="h1" variant="h5">
            ????????????
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id={loginIdName}
              label="????????????ID"
              name={loginIdName}
              autoFocus
              onChange={handleChange}
              error={!isValidLoginId}
              helperText={isValidLoginId ? "" : "??????????????????"}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name={passwordName}
              label="???????????????"
              type="password"
              autoComplete="password"
              onChange={handleChange}
              id={passwordName}
              error={!isValidPassword}
              helperText={isValidPassword ? "" : "??????????????????"}
            />
            {errorMessage === '' ? null :
              <Alert severity="error">?????????????????????????????????????????????</Alert>}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              ????????????
            </Button>
          </Box>
        </Box>
    </Container>
  );
}