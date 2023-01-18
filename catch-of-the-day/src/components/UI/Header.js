import React from "react";
import PropTypes from "prop-types";
import classes from "./Header.module.css";

const Header = (props) => (
  <header className={classes.top}>
    <h1>
      Catch
      <span className={classes.ofThe}>
        <span className={classes.of}>Of</span>
        <span className={classes.The}>The</span>
      </span>
      Day
    </h1>
    <h3 className={classes.tagline}>
      <span>{props.tagline}</span>
    </h3>
  </header>
);

Header.propTypes = {
  tagline: PropTypes.string.isRequired,
};

export default Header;
