import React, { ReactElement } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory, History } from 'history';
import { HelmetProvider } from 'react-helmet-async';
import store from 'store';
import { ROOT } from 'configs/routeNames';
import Pages from './Pages';
import 'styles/index.less';

const history: History = createBrowserHistory();

const App = (): ReactElement => (
  <Provider store={store}>
    <HelmetProvider>
      <Router history={history}>
        <BrowserRouter>
          <Switch>
            <Route path={ROOT} component={Pages} />
          </Switch>
        </BrowserRouter>
      </Router>
    </HelmetProvider>
  </Provider>
);
export default App;
