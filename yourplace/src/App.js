import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'

import './App.css';
import Users from './users/pages/users';
import NewPlaces from './places/pages/newplaces';
import MainNavigation from './shared/components/Navigation/mainNavigation';
import UserPlaces from './places/pages/userPlaces';
import UpdatePlace from './places/pages/UpdatePlace';

function App() {
  return (
    <BrowserRouter>
    <MainNavigation />
    <main>
    <Switch>
        <Route exact path='/'>
          <Users />
          </Route>
          <Route exact path='/:userId/places'> 
           <UserPlaces />
          </Route>
          <Route exact path='/places/new'>
            <NewPlaces />
          </Route>
          <Route exact path='/place/:placeId'>
            <UpdatePlace />
          </Route>
        <Redirect to='/'/>
    </Switch>
    </main>
    </BrowserRouter>
  );
}

export default App;
