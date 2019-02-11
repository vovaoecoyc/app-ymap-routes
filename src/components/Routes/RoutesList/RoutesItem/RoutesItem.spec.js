import React from 'react';
import { shallow, mount } from 'enzyme';

import RoutesItem from '../RoutesItem';
import context from '../../../../MockContext';

describe('RoutesItem container', () => {
  const props = {
    id: 1,
    point: { coordinates: [55.1, 38.1], name: 'Name Point' },
  };

  describe('RoutesItem initial', () => {
    const containerRoutesItem = shallow(<RoutesItem key={1} {...props} />, {
      context: { ...context },
    });

    it('RoutesItem initial snapshot', () => {
      expect(containerRoutesItem).toMatchSnapshot();
    });

    it('Initial render name of point', () => {
      expect(
        containerRoutesItem
          .find('div')
          .find('span')
          .text()
      ).toBe(props.point.name);
    });

    /*it('Remove RoutesItem', () => {
      containerRoutesItem
        .find('div')
        .first()
        .children()
        .find('div')
        .simulate('click');

      expect(containerRoutesItem.context.removePoint(props.id)).toHaveBeenCalledTimes(1);
      containerRoutesItem.unmount();
      // expect(containerRoutesItem.find());
    });*/
  });
});
