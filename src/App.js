import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {getUserInfo} from './actions/AuthActions';
import login from './containers/login';
import signup from './containers/signup';
import userPage from './containers/userPage';
import Home from './containers/Home';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';


class App extends Component {
  componentDidMount(){
    const token = localStorage.token;
    if (token) {
      this.props.getUserInfo(token);
    } 
  };

  render(){
    return (
      <div>
        <Router>

        <div className={classes.root}>
          <AppBar style={{ backgroundColor: '#78909c' }} position="static">
            <Toolbar>
              <Grid
                justify="space-between"
                container 
                spacing={2}
              >
                <IconButton edge="start" className={classes.homeButton} color="inherit" aria-label="home">
                  <Link style={{color: 'white'}} to='/'><HomeIcon /></Link>
                </IconButton>
                <Grid item>
                  {this.props.currentUser ? 
                  <>
                    <Button color="inherit"><Link style={{textDecoration: 'none', color: 'white'}} to={`/users/${this.props.currentUser.username}`}>Profile</Link></Button>
                  </>
                  :
                  <>
                    <Button color="inherit"><Link style={{textDecoration: 'none', color: 'white'}} to='/login'>Log In</Link></Button>
                    <Button color="inherit"><Link style={{textDecoration: 'none', color: 'white'}} to='/signup'>Sign Up</Link></Button>
                  </>}
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>
        </div>

          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/login' component={login}/>
            <Route path='/signup' component={signup}/>
            <Route path='/users/:username' component={userPage}/>
          </Switch>

        </Router>
      </div>
    );
  }
}

const classes = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  homeButton: {
    marginRight: theme.spacing(2),
  }
}));

function msp (state) {
  return {currentUser: state.auth.currentUser};
};

export default connect(msp,{getUserInfo})(App);
