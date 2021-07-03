import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Home from '../components/home';
import SetUsers from '../components/setUsers';
import NotFound from '../components/404';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/users" component={SetUsers} />
        <Route path="/users/:userId" component={SetUsers} />
        <Route path="/404" render={(props) => <NotFound {...props} />} />
        <Redirect from="*" to="/404" />
      </Switch>
    </Router>
  );
};

export default Routes;
