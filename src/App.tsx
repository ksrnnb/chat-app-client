import Login from './page/Login';
import Home from './page/Home';
import Rooms from './page/Rooms';
import Chat from './page/Chat';
import { ProvideAuth } from './auth/ProvideAuth';
import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import './App.css';
import { AuthRoute } from './auth/AuthRoute';
import { GuestRoute } from './auth/GuestRoute';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

function App() {
  return (
    <ProvideAuth>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <AuthRoute exact={true} path="/">
              <Home />
            </AuthRoute>
            <AuthRoute exact={true} path="/rooms">
              <Rooms />
            </AuthRoute>
            <AuthRoute exact={true} path="/rooms/:id">
              <Chat />
            </AuthRoute>
            <GuestRoute path="/login">
              <Login />
            </GuestRoute>
          </Switch>
        </Router>
      </ThemeProvider>
    </ProvideAuth >
  );
}

export default App;
