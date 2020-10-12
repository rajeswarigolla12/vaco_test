/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

// Needed for redux-saga es6 generator support
import '@babel/polyfill';

// Import all the third party stuff
import dva from 'dva';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { ConnectedRouter } from 'connected-react-router/immutable';
// import FontFaceObserver from 'fontfaceobserver';
// import history from 'utils/history';
import createHistory from 'history/createBrowserHistory';
import 'sanitize.css/sanitize.css';

// Load the favicon and the .htaccess file
import '!file-loader?name=[name].[ext]!./images/favicon.ico';
import 'file-loader?name=.htaccess!./.htaccess'; // eslint-disable-line import/extensions

// import './global.less';

// Import i18n messages
// import { translationMessages } from './i18n';

// Observe loading of Open Sans (to remove open sans, remove the <link> tag in
// the index.html file and this observer)
// const openSansObserver = new FontFaceObserver('Open Sans', {});

// // When Open Sans is loaded, add a font-family using Open Sans to the body
// openSansObserver.load().then(() => {
//   document.body.classList.add('fontLoaded');
// });

// Create app
const app = dva({
  history: createHistory(),
});

// Setup router
app.router(require('./router').default);

// Models
app.model(require('./models/user').default);
app.model(require('./models/schemas').default);

if (module.hot) {
  // Hot reloadable React components and translation json files
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept(['./i18n', './components/MainApp'], () => {
    ReactDOM.unmountComponentAtNode(document.getElementById('app'));
    app.start('#app');
  });
}

// Chunked polyfill for browsers without Intl support
if (!window.Intl) {
  new Promise(resolve => {
    resolve(import('intl'));
  })
    .then(() => Promise.all([import('intl/locale-data/jsonp/en.js')]))
    .then(() => app.start('#app'))
    .catch(err => {
      throw err;
    });
} else {
  app.start('#app');
}

// Install ServiceWorker and AppCache in the end since
// it's not most important operation and if main code fails,
// we do not want it installed

// console.log(
//   'process.env.NODE_ENV',
//   process.env.REACT_APP_DEV_API_URL,
//   process.env.REACT_APP_STAGE_API_URL,
// );

if (process.env.NODE_ENV === 'production') {
  require('offline-plugin/runtime').install(); // eslint-disable-line global-require
}
