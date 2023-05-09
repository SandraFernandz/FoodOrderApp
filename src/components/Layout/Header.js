import React from 'react';
import classes from './Header.module.css';
import ricoHeader from '../../assets/ricoHeader.png';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img
          src={ricoHeader}
          alt="ramen dish with rico message in the background"
        />
      </div>
    </>
  );
};

export default Header;
