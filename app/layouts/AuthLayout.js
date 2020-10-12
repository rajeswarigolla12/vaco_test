import React from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';

/* eslint-disable react/prefer-stateless-function */
class AuthLayout extends React.PureComponent {
  render() {
    const { children } = this.props;
    return (
      <div>
        {children}
      </div>
    );
  }
}

AuthLayout.propTypes = {
  children: PropTypes.any,
};

export default AuthLayout;
