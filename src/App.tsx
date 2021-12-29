import React from 'react';
import { Router, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import history from './hooks/useHistory';
import './App.css';
import Home from './pages/home';

function App() {
  return (
      <>
        <Router history={history}>
            <Switch>
                <Route path="/" component={Home}/>
            </Switch>
        </Router>
    </>
  );
}

export default App;
