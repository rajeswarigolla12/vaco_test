const CURRENT_USER = 'current-user';

export function setCurrentUser(user) {
  sessionStorage.setItem(CURRENT_USER, JSON.stringify(user));
}

export function getCurrentUser() {
  return JSON.parse(sessionStorage.getItem(CURRENT_USER));
}
