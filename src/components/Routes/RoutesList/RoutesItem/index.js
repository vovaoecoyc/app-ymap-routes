import React from 'react';

import { AppContext } from '../../../../Context';
import styles from './RoutesItem.module.css';

class RoutesItem extends React.Component {
  static contextType = AppContext;

  handlerClick = () => {
    this.context.removePoint(this.props.id);
  };

  render() {
    let {
      point: { name },
    } = this.props;
    return (
      <div className={`${styles.PointBlock}`}>
        <span>{name}</span>
        <div onClick={this.handlerClick} className={`${styles.RemoveIcon}`}>
          X
        </div>
      </div>
    );
  }
}

export default RoutesItem;
