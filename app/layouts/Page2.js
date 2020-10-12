import React from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';

/* eslint-disable react/prefer-stateless-function */
class Page2 extends React.PureComponent {
  render() {
    const { children } = this.props;
    return (
      <div>
        <h1>
          <FormattedMessage id="page2.message" defaultMessage="Page2 Layout" />
        </h1>
        {children}
      </div>
    );
  }
}

Page2.propTypes = {
  children: PropTypes.any,
};

export default Page2;
