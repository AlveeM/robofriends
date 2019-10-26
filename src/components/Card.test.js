import { shallow } from 'enzyme';
import React from 'react';
import Card from './Card';

it('expects to render Card component', () => {
    expect(shallow(<Card />)).toMatchSnapshot();
})