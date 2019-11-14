import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {connect} from 'react-redux';
import {setOrder} from '../actions/RestaurantActions';

const useStyles = makeStyles(theme => ({
  formControl: {
    position: 'absolute',
    right:'-8px',
    top:'91px',
    margin: theme.spacing(1),
    minWidth: 120,
    background: 'whitesmoke',
    zIndex: '1',
  }
}));

function Order(props) {
  const classes = useStyles();  

  return (
    <div>
      <FormControl variant="filled" className={classes.formControl}>
        <InputLabel id="demo-simple-select-filled-label">Order By</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          onClick={(e) => props.setOrder(e.target.value)} 
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={'asc'}>Asc</MenuItem>
          <MenuItem value={'desc'}>Desc</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default connect(null,{
    setOrder
})(Order);