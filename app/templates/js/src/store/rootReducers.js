import { combineReducers } from '@reduxjs/toolkit';
import { reducer as directionReducer } from 'app/molecules/Direction/ducks/slice';<% if (casl_react_package) { %>
import { reducer as permissionReducer } from 'app/modules/Permission/ducks/slice';<% } %>
// [IMPORT NEW REDUCER ABOVE] < Needed for generating seamlessly

const reducers = {
  direction: directionReducer,<% if (casl_react_package) { %>
  permission: permissionReducer,<% } %>
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating seamlessly
};
const rootReducer = combineReducers(reducers);

export default rootReducer;
