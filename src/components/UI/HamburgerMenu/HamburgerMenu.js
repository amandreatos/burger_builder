import React from "react";
import classes from './HamburgerMenu.css';

const hamburgerMenu = props => (
  <div onClick={props.open} className={classes.HamburgerMenu}>
    <div className={classes.HamburgerMenuLine}/>
    <div className={classes.HamburgerMenuLine}/>
    <div className={classes.HamburgerMenuLine}/>
  </div>
);

export default hamburgerMenu;
