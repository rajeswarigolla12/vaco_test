import React from 'react';
import { shallow } from 'enzyme';
import { FormattedMessage } from 'react-intl';

import Page2 from '../Page2';

describe('<Page2 />', () => {
  it('should render its heading', () => {
    const renderedComponent = shallow(<Page2 />);
    expect(
      renderedComponent.contains(
        <h1>
          <FormattedMessage id="page2.message" defaultMessage="Page2 Layout" />
        </h1>,
      ),
    ).toBe(true);
  });
});
