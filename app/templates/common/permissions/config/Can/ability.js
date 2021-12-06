import { Ability, AbilityBuilder } from '@casl/ability';

// eslint-disable-next-line import/no-mutable-exports
export const ability = new Ability();

export function updateAbility(permissions) {
  const { can, rules } = new AbilityBuilder();
  permissions.forEach((perm) => {
    can(perm.action, perm.subject);
  });

  ability.update(rules);
};
