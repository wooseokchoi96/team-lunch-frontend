import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {getUserInfo} from './actions';
import login from './containers/login';
import signup from './containers/signup';
import userPage from './containers/userPage';


class App extends Component {
  componentDidMount(){
    const user_id = localStorage.user_id;
    if (user_id) {
      this.props.getUserInfo(user_id);
    } 
  }
  
  render(){
  console.log("APP current user",this.props.state.auth.currentUser)
    return (
      <div>
        <h1>Hi, you will always see me!</h1>
        <Router>
          <Switch>
            <Route path='/login' component={login}/>
            <Route path='/signup' component={signup}/>
            <Route path='/users/:username' component={userPage}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

function msp (state) {
  return {state}
}

export default connect(msp,{getUserInfo})(App);
