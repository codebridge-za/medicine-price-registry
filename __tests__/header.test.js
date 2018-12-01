import React from 'react';
import { shallow } from 'enzyme';
import Header from '../src/components/header';

describe('Header', () => {
  const header = shallow(<Header />);

  it('renders properly', () => {
    expect(header).toMatchSnapshot();
  });
});
