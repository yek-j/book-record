import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import MainPage from './components/MainPage/MainPage';
import NavBar from './components/NavBar/NavBar';
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
        
        </Switch>
      </Container>
    </div>
  </Router>
  );
}

export default App;
