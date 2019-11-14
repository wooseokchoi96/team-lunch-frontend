import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {getUserInfo} from './actions/AuthActions';
import login from './containers/login';
import signup from './containers/signup';
import userPage from './containers/userPage';
import userSettings from './containers/userSettings';
import restaurantPage from './containers/restaurantPage';
import allRestaurants from './containers/allRestaurants';
import Home from './containers/Home';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';
import MenuList from './Material-UI/MenuList';


class App extends Component {
  componentDidMount(){
    const token = localStorage.token;
    if (token) {
      this.props.getUserInfo(token);
    } 
  };

  render(){
    return (
      <>
        <Router>

        <AppBar id='appbar' className={classes.root} style={{ backgroundColor: '#78909c'}} position="static">
          <Toolbar>
            <Grid
              justify="space-between"
              container 
              spacing={2}
            >
              <Button className={classes.navButton} color="inherit" aria-label="home">
                <Link style={{color: 'white'}} to='/'><HomeIcon/></Link>
              </Button>
              <Grid item>
                {this.props.currentUser ? 
                  <MenuList />
                  :
                  <>
                    <Button color="inherit"><Link style={{textDecoration: 'none', color: 'white'}} to='/login'>Log In</Link></Button>
                    <Button color="inherit"><Link style={{textDecoration: 'none', color: 'white'}} to='/signup'>Sign Up</Link></Button>
                  </>}
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>

        <div id='restofapp'>
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/login' component={login}/>
            <Route path='/signup' component={signup}/>
            <Route path='/users/:username' exact component={userPage}/>
            <Route path='/users/:username/settings' component={userSettings}/>
            <Route path='/restaurants' exact component={allRestaurants}/>
            <Route path='/restaurants/:restaurant_name' component={restaurantPage}/>
          </Switch>
        </div>

        </Router>

      </>
    );
  }
}

const classes = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  navButton: {
    marginRight: theme.spacing(2),
  }
}));

function msp (state) {
  return {currentUser: state.auth.currentUser};
};

export default connect(msp,{getUserInfo})(App);
