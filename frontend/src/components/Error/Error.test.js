import React from 'react';
import renderer from 'react-test-renderer';
import Error from './Error';

describe('<Error/>', () => {
  it('renders by default', () => {
    const tree = renderer.create(<Error error="" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
