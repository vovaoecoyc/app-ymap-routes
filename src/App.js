import React, { Component } from 'react';
import './App.css';

import CustomMap from './components/CustomMap';
import Routes from './components/Routes';
import { AppContext } from './Context';
// import Test from './components/Test';

class App extends Component {
  state = {
    mapInstance: null,
    mapRef: null,
    points: localStorage.getItem('points') ? JSON.parse(localStorage.getItem('points')) : [],
  };

  loadPoints = () => {
    let newPoints = JSON.parse(localStorage.getItem('points'));
    this.setState(prevState => ({ ...prevState, points: newPoints }));
  };

  getPoints = () => this.state.points;

  getMapRef = () => this.state.mapRef;

  getMapInstance = () => this.state.mapInstance;

  setMapInstance = mapInstance => {
    this.setState(prevState => ({ ...prevState, mapInstance: mapInstance }));
  };

  setMapRef = mapRef => {
    this.setState(prevState => ({ ...prevState, mapRef: mapRef }));
  };

  changePointPosition = (idPoint, newCoordPoint) => {
    let newPoints = this.getPoints().map((value, i) => {
      if (idPoint === i) {
        value.coordinates = newCoordPoint;
      }
      return value;
    });
    localStorage.setItem('points', JSON.stringify(newPoints));
    this.loadPoints();
  };

  removePoint = id => {
    let points = this.state.points,
      newPointsList = points.filter((value, i) => (i === id ? false : true));
    localStorage.setItem('points', JSON.stringify(newPointsList));
    this.loadPoints();
  };

  render() {
    return (
      <AppContext.Provider
        value={{
          loadPoints: this.loadPoints,
          getPoints: this.getPoints,
          getMapInstance: this.getMapInstance,
          setMapInstance: this.setMapInstance,
          setMapRef: this.setMapRef,
          removePoint: this.removePoint,
          getMapRef: this.getMapRef,
          changePointPosition: this.changePointPosition,
          ...this.state,
        }}
      >
        <div className="App">
          <div className="RoutesBlock">
            <Routes points={this.getPoints()} />
          </div>
          <div className="MapBlock">
            <CustomMap points={this.getPoints()} />
          </div>
          {/* <Test /> */}
        </div>
      </AppContext.Provider>
    );
  }
}

export default App;
