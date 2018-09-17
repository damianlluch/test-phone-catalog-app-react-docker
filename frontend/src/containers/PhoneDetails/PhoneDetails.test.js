import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import PhoneDetails from './PhoneDetails';

const phone = {
  id: 'iphone',
  details: {
    title: 'Apple iPhone X',
    brand: 'Apple',
    image:
      'https://d2giyh01gjb6fi.cloudfront.net/phone_front/0001/88/thumb_87957_phone_front_big.jpeg',
    unveiled: '2017-09',
    status: 'On Sale',
  },
  design: {
    size: '70.9 mm x 143.6 mm x 7.7 mm',
    weight: '174 g',
    usableSurface: '81 %',
    colors: ['Black', 'Cyan', 'Gray', 'Pink'],
  },
  screen: {
    diagonal: '5.8',
    aspectRatio: '19:9',
    type: 'Oled',
    resolution: '1125 x 2436 px',
  },
  hardware: {
    cpu: 'Apple A11 Bionic',
    gpu: 'Apple three-core graphics processing unit + M11 mo',
    ram: '3 GB',
    capacity: ['64 GB', '256 GB'],
  },
  performance: { antutuScore: '245.149' },
};

describe('<PhoneDetails/>', () => {
  it('renders by default', () => {
    const tree = renderer.create(<MemoryRouter><PhoneDetails match={{ params: { id: 'iphone' } }} fetchPhone={() => { }} item={phone} /></MemoryRouter>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders an error', () => {
    const tree = renderer.create(<PhoneDetails match={{ params: { id: 'iphone' } }} fetchPhone={() => { }} error={{}} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
