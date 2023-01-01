import * as React from 'react';
import './style.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Preferences from './components/Preferences/Preferences';

export default function App() {
  return (
    <div>
      <ul>
        <li>
          <a href="/dashboard">Dashboard</a>
        </li>
        <li>
          <a href="/preferences">Preferences</a>
        </li>
      </ul>
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard" component={Dashboard}></Route>
          <Route path="/preferences" component={Preferences}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
