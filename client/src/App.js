import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import NavBar from "./components/views/NavBar/NavBar";
import MainPage from "./components/views/MainPage/MainPage";
import LoginPage from "./components/views/LoginPage/LoginPage";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";
import BookRecord from "./components/views/BookRecord/BookRecord";
import Auth from './hoc/auth';
import MyPage from './components/views/MyPage/MyPage';
import Update from './components/views/MyPage/Sections/Update'

function App() {
  return (
    <Router>
    <div>
     
      {/*
        A <Switch> looks through all its children <Route>
        elements and renders the first one whose path
        matches the current URL. Use a <Switch> any time
        you have multiple routes, but you want only one
        of them to render at a time
      */}
      <NavBar></NavBar>
      <Switch>
        <Route exact path="/" component={Auth(MainPage, null) } />
        <Route exact path="/login" component={Auth(LoginPage, false)} />
        <Route exact path="/register" component={Auth(RegisterPage, false)} />
        <Route exact path="/write" component={Auth(BookRecord, true)} />
        <Route exact path="/mypage" component={Auth(MyPage, true)} />
        <Route exact path="/update" component={Auth(Update, true)} />
      </Switch>
    </div>
  </Router>
  )
}

export default App;


