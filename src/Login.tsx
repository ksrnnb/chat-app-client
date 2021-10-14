
import * as React from 'react';
import Alert from '@mui/material/Alert';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { LoginRequest } from './chatpb/chat-app_pb';
import { ChatAppServiceClient } from './chatpb/Chat-appServiceClientPb';

const theme = createTheme();

export default function Login() {
  const loginIdName = 'login-id';
  const passwordName = 'password';

  const [isValidLoginId, setValidLoginId] = React.useState(true);
  const [isValidPassword, setValidPassword] = React.useState(true);
  const [errorMessage, setErrorMessage] = React.useState('');

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

  const doLogin = (loginId: string, password: string) => {
    const request = new LoginRequest();
    request.setLoginId(loginId);
    request.setPassword(password);

    const client = new ChatAppServiceClient("http://localhost:8080");
    return client.login(request, {});
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const [loginId, password] = getFormData(event);

    let res;
    try {
      res = await doLogin(loginId, password);
    } catch (errorRes) {
      setErrorMessage('ユーザーがみつかりませんでした');
    }

    // TODO: ページ遷移
  };


  return (
    <ThemeProvider theme={theme}>
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
            ログイン
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id={loginIdName}
              label="ログインID"
              name={loginIdName}
              autoFocus
              onChange={handleChange}
              error={!isValidLoginId}
              helperText={isValidLoginId ? "" : "必須項目です"}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name={passwordName}
              label="パスワード"
              type="password"
              autoComplete="password"
              onChange={handleChange}
              id={passwordName}
              error={!isValidPassword}
              helperText={isValidPassword ? "" : "必須項目です"}
            />
            { errorMessage === '' ? null :
                <Alert severity="error">ユーザーが見つかりませんでした</Alert> }
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              ログイン
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}