import SessionStorageConstants from '../common/SessionStorageConstants';

export function sendSessionStorageThroughLocalStorageEvent() {
  localStorage.setItem(
    SessionStorageConstants.KEY,
    JSON.stringify(sessionStorage),
  );
  localStorage.removeItem(SessionStorageConstants.KEY);
}

export function updateSessionStorageFromLocalStorageEvent(event) {
  const data = JSON.parse(event.newValue);

  for (const key in data) {
    sessionStorage.setItem(key, data[key]);
  }
}

export function requestSessionStorageFromExistingTabs() {
  localStorage.setItem(SessionStorageConstants.GET, Date.now());
}

export function registerTab() {
  localStorage.setItem('ACTIVE-TABS', localStorage.getItem());
}
