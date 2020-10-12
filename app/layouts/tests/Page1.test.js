import React from 'react';
import { shallow } from 'enzyme';
import { FormattedMessage } from 'react-intl';

import Page1 from '../Page1';

describe('<Page1 />', () => {
  it('should render its heading', () => {
    const renderedComponent = shallow(<Page1 />);
    expect(
      renderedComponent.contains(
        <h1>
          <FormattedMessage id="page1.message" defaultMessage="Page1 Layout" />
        </h1>,
      ),
    ).toBe(true);
  });
});
