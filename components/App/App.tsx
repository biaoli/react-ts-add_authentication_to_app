import * as React from 'react';
import '../../style.css';

import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import Preferences from '../Preferences/Preferences';

export default function App() {
  return (
    <div>
      <h1>App</h1>
      <BrowserRouter>
        <Switch>
        <Route path="/" component={App}></Route>
          <Route path="/dashboard" component={Dashboard}></Route>
          <Route path="/preferences" component={Preferences}></Route>
        </Switch>
      </BrowserRouter>
  </div> 
  );
}
