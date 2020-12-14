import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import MainPage from './components/MainPage/MainPage';


function App() {
  return (
    <Router>
    <div>
      {}
      <Switch>
        <Route exact path="/" component={MainPage} />
      
      </Switch>
    </div>
  </Router>
  );
}

export default App;
