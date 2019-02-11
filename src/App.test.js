import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

describe('App container', () => {
  const containerApp = shallow(<App />);

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Is render Routes component', () => {
    expect(containerApp.find('Routes')).toHaveLength(1);
  });

  it('Is render CustomMap component', () => {
    expect(containerApp.find('CustomMap')).toHaveLength(1);
  });
});
