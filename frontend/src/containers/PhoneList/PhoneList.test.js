import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import PhoneList from './PhoneList';

const phones = [
  {
    id: 'iphone',
    details: {
      title: 'Apple iPhone X',
      image:
        'https://d2giyh01gjb6fi.cloudfront.net/phone_front/0001/88/thumb_87957_phone_front_big.jpeg',
    },
    screen: {
      diagonal: '5.8',
    },
    hardware: {
      capacity: ['64 GB', '256 GB'],
    },
  },
  {
    id: 'galaxy',
    details: {
      title: 'Samsung Galaxy S9+',
      image:
        'https://d2giyh01gjb6fi.cloudfront.net/phone_front/0002/24/thumb_123965_phone_front_big.jpeg',
    },
    screen: {
      diagonal: '6.2',
    },
    hardware: {
      capacity: ['64 GB', '128 GB', '256 GB'],
    },
  },
];

describe('<PhoneList/>', () => {
  it('renders by default', () => {
    const tree = renderer.create(<PhoneList fetchPhones={() => {}} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders a list of phones', () => {
    const tree = renderer.create(<MemoryRouter><PhoneList fetchPhones={() => { }} items={phones} /></MemoryRouter>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders an error', () => {
    const tree = renderer.create(<PhoneList fetchPhones={() => { }} error={{}} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
