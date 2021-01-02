import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import MainPage from './components/MainPage/MainPage';
import NavBar from './components/NavBar/NavBar';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import Container from '@material-ui/core/Container';
import Auth from './hoc/auth';

function App() {
  return (
    
    <Router>
    <div>
      {}
      <NavBar/>
      <Container>
        <Switch>
          <Route exact path="/" component={Auth(MainPage, null)} /> 
          <Route exact path="/login" component={Auth(LoginPage, false)} />  
          <Route exact path="/register" component={Auth(RegisterPage, false)} />  
        </Switch>
      </Container>
    </div>
  </Router>
  );
}

export default App;
