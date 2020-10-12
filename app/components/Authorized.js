import { checkPermissions } from '../utils/permissions';

export default ({ children, role, noMatch = null }) => {
  const childrenRender = typeof children === 'undefined' ? null : children;

  if (checkPermissions(role)) {
    return childrenRender;
  }
  return noMatch;
};
