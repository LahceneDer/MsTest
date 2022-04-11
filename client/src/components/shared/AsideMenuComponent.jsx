import { MenuItem, MenuList } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  menu: {
    backgroundColor: "#fff",
    height: '100vh'
  },
  menuItem: {
    textDecoration: 'none',
    color: '#3f51b5'
  }
}));

const AsideMenuComponent = () => {
  const classes = useStyles();
  return (
    <MenuList className={classes.menu} >
      <Link className={classes.menuItem} to="/" >
        <MenuItem>
          Home 
        </MenuItem>
      </Link> 
      <Link className={classes.menuItem} to="/suppliers" >
        <MenuItem>
          Suppliers 
        </MenuItem>
      </Link> 
      <Link className={classes.menuItem} to="/orders" >
        <MenuItem>
          Orders 
        </MenuItem>
      </Link> 
  </MenuList>
  )
}

export default AsideMenuComponent