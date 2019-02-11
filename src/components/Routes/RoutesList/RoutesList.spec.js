import React from 'react';
import { shallow } from 'enzyme';
import RoutesList from '../RoutesList';

describe('RoutesList container', () => {
  const props = {
    points: [
      { coordinates: [55.1, 38.1], name: 'Name Point1' },
      { coordinates: [55.9, 38.0], name: 'Name Point2' },
    ],
  };

  const containerRoutesList = shallow(<RoutesList {...props} />);

  it('RoutesList initial snapshot', () => {
    expect(containerRoutesList).toMatchSnapshot();
  });

  it('Is render RoutesItem components', () => {
    expect(containerRoutesList.find('RoutesItem')).toHaveLength(props.points.length);
  });
});
