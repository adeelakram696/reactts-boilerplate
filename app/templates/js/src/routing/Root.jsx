import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import store from 'store';
import { ROOT } from 'configs/routeNames';
import Pages from './Pages';
import 'styles/index.less';

const history = createBrowserHistory();

const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <BrowserRouter>
        <Switch>
          <Route path={ROOT} component={Pages} />
        </Switch>
      </BrowserRouter>
    </Router>
  </Provider>
);
export default App;
