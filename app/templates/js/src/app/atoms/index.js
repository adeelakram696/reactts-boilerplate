import Button from './Button';<% if (casl_react_package) { %>
import Can, { AbilityContext } from './Can';
import { ability, updateAbility } from './Can/ability';<% } %>
// [INSERT NEW ATOM EXPORT ABOVE] < Needed for generating atoms seamlessly

export { 
  Button,<% if (casl_react_package) { %>
  ability,
  updateAbility,
  AbilityContext,
  Can<% } %>
};
