import React from 'react';
import renderer from 'react-test-renderer';
import PhoneListItem from './PhoneListItem';

describe('<PhoneListItem/>', () => {
  it('renders by default', () => {
    const tree = renderer.create(<PhoneListItem />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
