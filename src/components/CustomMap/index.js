import React from 'react';
import { YMaps, Map, Placemark, Polyline } from 'react-yandex-maps';
import { AppContext } from '../../Context';

class CustomMap extends React.Component {
  static contextType = AppContext;
  constructor(props) {
    super(props);
    this.customMap = null;
    this.refMap = null;
    this.mapState = {
      center: [55.754734, 37.583314],
      zoom: 7,
      // controls: [],
    };
  }

  getYandexMapObject = ymaps => {
    this.customMap = ymaps;
    if (!this.context.getMapInstance()) {
      this.context.setMapInstance(this.customMap);
    }
    if (!this.context.getMapRef()) {
      this.context.setMapRef(this.refMap);
    }
  };

  handlerDragend = (e, id) => {
    const newCoord = e.originalEvent.target.geometry._coordinates;
    this.context.changePointPosition(id, newCoord);
  };

  render() {
    let { points } = this.props;
    return (
      <YMaps>
        <Map
          onLoad={ymaps => this.getYandexMapObject(ymaps)}
          instanceRef={ref => {
            this.refMap = this.refMap ? this.refMap : ref;
          }}
          state={{ ...this.mapState }}
          height={'100%'}
          width={'100%'}
        >
          {points.map((value, i) => (
            <Placemark
              modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
              key={i}
              geometry={value.coordinates}
              properties={{ balloonContent: value.name, iconContent: i + 1 }}
              options={{ draggable: true }}
              onDragend={e => this.handlerDragend(e, i)}
            />
          ))}
          <Polyline geometry={points.map(value => value.coordinates)} />
        </Map>
      </YMaps>
    );
  }
}

export default CustomMap;
