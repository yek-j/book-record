import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <Router>
    <div>
      {}
      <Switch>
        <Route exact path="/" component={Auth(LandingPage, null) } />
        <Route exact path="/login" component={Auth(LoginPage, false)} />
        <Route exact path="/register" component={Auth(RegisterPage, false)} />
        <Route exact path="/mybook" component={Auth(MyBookPage, true)} />
      </Switch>
    </div>
  </Router>
  );
}

export default App;
