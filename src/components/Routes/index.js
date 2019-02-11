import React from 'react';

// import { Input } from '../UI/Input';
import RoutesList from './RoutesList';
import styles from './Routes.module.css';
import { AppContext } from '../../Context';

class Routes extends React.Component {
  state = {
    value: '',
  };

  static contextType = AppContext;

  handlerChange = e => {
    let value = { value: e.target.value };
    this.setState(() => ({ ...value }));
  };

  handlerKeyPress = e => {
    if (e.key === 'Enter') {
      const mapInstanse = this.context.getMapInstance();
      let newData = localStorage.getItem('points')
          ? JSON.parse(localStorage.getItem('points'))
          : [],
        point = {
          coordinates: [],
          name: this.state.value,
        };
      mapInstanse.load(map => {
        map
          .geocode(this.state.value)
          .then(response => {
            let newPoint =
              response.geoObjects.properties._data.metaDataProperty.GeocoderResponseMetaData.Point;
            if (newPoint) {
              point.coordinates = newPoint.coordinates.reverse();
              newData.push(point);
              localStorage.setItem('points', JSON.stringify(newData));
              this.setState(prevState => ({ ...prevState, value: '' }));
              this.context.loadPoints();
            }
          })
          .catch(error => {
            console.log(error);
          });
      });
    }
  };

  render() {
    let { points } = this.props;
    return (
      <div className={`${styles.RoutesBlock}`}>
        <input
          type="text"
          className={`${styles.Input}`}
          placeholder="Новая точка маршрута"
          value={this.state.value}
          onChange={this.handlerChange}
          onKeyPress={this.handlerKeyPress}
        />
        {/* <Input
          placeholder="Новая точка маршрута"
          onKeyPress={this.handlerKeyPress}
          onChange={this.handlerChange}
          value={this.state.value}
        /> */}
        <RoutesList points={points} />
      </div>
    );
  }
}

export default Routes;
