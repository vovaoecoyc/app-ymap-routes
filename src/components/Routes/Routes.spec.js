import React from 'react';
import { shallow } from 'enzyme';

import Routes from '../Routes';
import context from '../../MockContext';

describe('Routes container', () => {
  const props = {
    points: context.points,
  };

  const initialState = {
    value: '',
  };

  const containerRoutes = shallow(<Routes {...props} />);

  describe('initial render', () => {
    it('RoutesList initial snapshot', () => {
      expect(containerRoutes).toMatchSnapshot();
    });

    it('Is render input', () => {
      expect(containerRoutes.find('input')).toHaveLength(1);
    });

    it('Is render RoutesList', () => {
      expect(containerRoutes.find('RoutesList')).toHaveLength(1);
    });

    it('initial render Routes component', () => {
      containerRoutes.setState(initialState);
      expect(containerRoutes.state()).toEqual(initialState);
    });
  });

  describe('change', () => {
    const valueInput = 'example string';

    beforeEach(() => {
      containerRoutes.find('input').simulate('change', {
        target: {
          value: valueInput,
        },
      });
    });

    it('handler update value of state', () => {
      expect(containerRoutes.state().value).toBe(valueInput);
    });
  });

  /*describe('keypress', () => {
    const keyValue = 'Enter';

    beforeEach(() => {
      containerRoutes.find('input').simulate('keypress', {
        key: keyValue,
      });
    });

    it('handler keypress', () => {
      expect(containerRoutes.state().value).toBe('');
    });
  });*/
});
