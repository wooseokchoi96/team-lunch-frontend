import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {connect} from 'react-redux';
import {setSort} from '../actions/RestaurantActions';

const useStyles = makeStyles(theme => ({
  formControl: {
    position: 'absolute',
    right:'-8px',
    top:'34px',
    margin: theme.spacing(1),
    minWidth: 120,
    background: 'whitesmoke',
    zIndex: '1'
  }
}));

function Sorter(props) {
  const classes = useStyles();  

  return (
    <div>
      <FormControl variant="filled" className={classes.formControl}>
        <InputLabel id="demo-simple-select-filled-label">Sort By</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          onClick={(e) => props.setSort(e.target.value)}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={'cost'}>Cost</MenuItem>
          <MenuItem value={'rating'}>Rating</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default connect(null,{
    setSort
})(Sorter);