import Login from './page/Login';
import Home from './page/Home';
import { ProvideAuth } from './auth/ProvideAuth';
import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import './App.css';
import { AuthRoute } from './auth/AuthRoute';
import { GuestRoute } from './auth/GuestRoute';

function App() {
  return (
    <ProvideAuth>
      <Router>
        <Switch>
          <AuthRoute exact={true} path="/">
            <Home />
          </AuthRoute>
          <GuestRoute path="/login">
            <Login />
          </GuestRoute>
        </Switch>
      </Router>
    </ProvideAuth >
  );
}

export default App;
