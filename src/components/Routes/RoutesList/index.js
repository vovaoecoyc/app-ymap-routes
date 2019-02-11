import React from 'react';

import RoutesItem from './RoutesItem';
import styles from './RoutesList.module.css';

class RoutesList extends React.Component {
  render() {
    const { points } = this.props;
    return (
      <div className={`${styles.RoutesListBlock}`}>
        {points.map((value, i) => (
          <RoutesItem key={i} id={i} point={value} />
        ))}
      </div>
    );
  }
}

export default RoutesList;
