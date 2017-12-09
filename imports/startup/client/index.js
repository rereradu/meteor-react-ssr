import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch } from 'react-router-dom';

import routes from '../both/routes.js';

const App = () => (
  <BrowserRouter>
    <Switch>
      {routes}
    </Switch>
  </BrowserRouter>
)

ReactDOM.render(<App />, document.getElementById('app'));
