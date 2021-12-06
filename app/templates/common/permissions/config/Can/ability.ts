import { Ability, AbilityBuilder } from '@casl/ability';

export interface Permissions {
  action: string;
  subject: string;
};

// eslint-disable-next-line import/no-mutable-exports
export const ability = new Ability();

export function updateAbility(permissions: Permissions []): void {
  const { can, rules } = new AbilityBuilder(Ability);
  permissions.forEach((perm: Permissions) => {
    can(perm.action, perm.subject);
  });

  ability.update(rules);
};
