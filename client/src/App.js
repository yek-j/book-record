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


function App() {
  return (
    
    <Router>
    <div>
      {}
      <NavBar/>
      <Container>
        <Switch>
          <Route exact path="/" component={MainPage} /> 
          <Route exact path="/login" component={LoginPage} />  
          <Route exact path="/register" component={RegisterPage} />  
        </Switch>
      </Container>
    </div>
  </Router>
  );
}

export default App;
