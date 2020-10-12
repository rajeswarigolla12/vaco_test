import _ from 'lodash';
import { getCurrentUser } from './user';

const userHasPermission = _.includes;

export function checkPermissions(p) {
  const role = p || [];
  const currentUser = getCurrentUser();
  if (!currentUser) {
    // must be authenticated at the least
    return false;
  }

  const userPermissions = currentUser.role || [];
  if (role.constructor === Array) {
    return _.every(role, permission =>
      userHasPermission(userPermissions, permission),
    );
  }

  return userHasPermission(userPermissions, role);
}
