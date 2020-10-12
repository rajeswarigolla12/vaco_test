import React from 'react';
import { ConnectedRouter } from 'react-router-redux';
import PropTypes from 'prop-types';

import App from './components/MainApp';

function RouterConfig({ history }) {
  return (
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  );
}

RouterConfig.propTypes = {
  history: PropTypes.any,
};

export default RouterConfig;
