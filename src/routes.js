import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Landing from './components/Landing'
import Profile from './components/Profile'

export default (
  <Switch>
    <Route exact path='/' component={Landing} />
    <Route path='/meet-me/:first/:last' component={Profile} />

  </Switch>
)