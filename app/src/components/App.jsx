import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Register from './pages/register';
import Login from './pages/login';
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/register' component={Register} />

        <Route exact path='/' component={Login} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
