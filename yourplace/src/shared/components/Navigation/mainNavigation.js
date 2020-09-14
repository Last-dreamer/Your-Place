import React, { useState } from 'react';

import './mainNavigation.css';
import MainHeader from './mainHeader';
import { Link } from 'react-router-dom';
import NavLinks from './navLinks';
import SideDrawer from './SideDrawer';
import Backdrop from '../UiElements/Backdrop';

const MainNavigation = props => {

    const [isDrawerOpen, setDrawerOpen]  =  useState(false);

    const drawerOpenHandler =()=> {
      setDrawerOpen(true);
    }

    const drawerCloseHandler = () => {
        setDrawerOpen(false);
    }

    return (
        <div>
          { isDrawerOpen && <Backdrop onClick={drawerCloseHandler}/>}
          {  isDrawerOpen && 
         <SideDrawer onClick={drawerCloseHandler}>
            <nav className='main-navigation__drawer-nav'>
                <NavLinks />
            </nav>
            </SideDrawer>
          }
        <MainHeader>
            <button className ="main-navigation__menu-btn" onClick={drawerOpenHandler}>
                <span />
                <span />
                <span />
            </button>
            <h1 className='main-navigation__title'>
                <Link to='/'>YourPlaces</Link>
            </h1>
            <nav className='main-navigation__header-nav'>
            <NavLinks />
            </nav>
         </MainHeader>
           </div>
    );
}

export default MainNavigation;