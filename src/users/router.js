import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';


import Users from './index';
import Registration from './registration/index';
import Login from './login/index';
import Activation from './activation/index';

export let routerUsers = (

  <Switch>
    <Route path='/users' exact render={() => <Redirect to='/users/login'/>}/>
    <Route path='/users/login' exact render={(props) =><Users><Login match={props.match}/></Users>}/>
    <Route path="/users/registration" exact render={(props) =><Users ><Registration match={props.match}/></Users>}/>
    <Route path="/users/activation" exact render={(props) =><Users ><Activation  match={props.match}/></Users>}/>
  </Switch>
);