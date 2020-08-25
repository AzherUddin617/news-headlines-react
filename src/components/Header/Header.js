import React from 'react';
import classes from './Header.module.scss';

const Header = () => {
  return (
    <div className={classes.Header}>
      <h2 className={classes.Logo}>News</h2>
    </div>
  );
}

export default Header;
