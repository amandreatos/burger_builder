import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./Toolbar.css";
import HamburgerMenu from '../../UI/HamburgerMenu/HamburgerMenu';

const toolbar = props => (
  <header className={classes.Toolbar}>
    <HamburgerMenu open={props.open} />
    <div className={classes.Logo}>
      <Logo />
    </div>
    <nav className={classes.DesktopOnly}>
      <NavigationItems isAuthenticated={props.isAuth}/>
    </nav>
  </header>
);

export default toolbar;
