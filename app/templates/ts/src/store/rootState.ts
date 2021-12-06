import { AuthState } from 'app/modules/Auth/ducks/types';
import { DirectionState } from 'app/molecules/Direction/ducks/types'; <% if (casl_react_package) { %>
import { PermissionState } from 'app/modules/Permission/ducks/types'; <% } %>
// [IMPORT NEW REDUCER STATE ABOVE] < Needed for generating seamlessly

export interface RootState {
  auth: AuthState,
  direction: DirectionState; <% if (casl_react_package) { %>
  permission: PermissionState <% } %>
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating seamlessly
}
