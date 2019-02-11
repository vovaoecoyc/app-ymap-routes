import React from 'react';
import { shallow } from 'enzyme';

import CustomMap from '../CustomMap';
import context from '../../MockContext';

describe('CustomMap container', () => {
  describe('CustomMap container initial', () => {
    const containerCustomMap = shallow(<CustomMap points={context.getPoints()} />);

    it('CustomMap initial snapshot', () => {
      expect(containerCustomMap).toMatchSnapshot();
    });
  });
});
