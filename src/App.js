import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import login from './containers/login';
import signup from './containers/signup';
import userPage from './containers/userPage';

function App() {
  return (
    <div>
      <h1>Hi, you will always see me!</h1>
      <Router>
        <Switch>
          <Route path='/login' component={login}/>
          <Route path='/signup' component={signup}/>
          <Route path='/userPage/:username' component={userPage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
