import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import Direction from 'app/molecules/Direction';<% if (dashboard_layout) { %>
import Layout from 'app/molecules/Layout/dashboard';<% } %><% if (casl_react_package) { %>
import { AbilityContext, ability } from 'app/atoms';
import PageNotFound from 'app/pages/PageNotFound';
import Permission from 'app/modules/Permission/Permission';<% } %>
import landingPage from 'app/pages/landing';<% if (ui_library == 'material') { %>import { ThemeProvider } from '@material-ui/core/styles';import { theme } from 'styles';<% } %>

const Pages = (props) => {
  const { path } = props.match;

  return (
    <div className="base"><% if (ui_library == 'material') { %><ThemeProvider theme={theme}><% } %>
      <Direction>
        <% if (casl_react_package) { %><Permission><% } %>
          <% if (casl_react_package) { %><AbilityContext.Provider value={ability}><% } %>
            <% if (dashboard_layout) { %><Layout><% } %>
              <Switch>
                <Route exact path={`${path}`} component={landingPage} />
                <Route path="*" component={PageNotFound} />
              </Switch>
            <% if (dashboard_layout) { %></Layout><% } %>
          <% if (casl_react_package) { %></AbilityContext.Provider><% } %>
        <% if (casl_react_package) { %></Permission><% } %>
      </Direction><% if (ui_library == 'material') { %></ThemeProvider><% } %>
    </div>
  );
};
Pages.propTypes = {
  match: PropTypes.objectOf(PropTypes.any),
};
Pages.defaultProps = {
  match: {},
};
export default Pages;
