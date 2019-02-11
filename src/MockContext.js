const context = {
  points: [
    { coordinates: [55.1, 38.1], name: 'Name Point1' },
    { coordinates: [55.9, 38.0], name: 'Name Point2' },
  ],
  mapInstance: null,
  mapRef: null,
  loadPoints: () => ({}),
  getPoints: () => [
    {
      coordinates: [55.1, 38.1],
      name: 'Name Point1',
    },
    {
      coordinates: [55.2, 38.2],
      name: 'Name Point2',
    },
  ],
  getMapInstance: () => ({}),
  setMapInstance: () => ({}),
  setMapRef: () => ({}),
  removePoint: id => ({}),
  getMapRef: () => ({}),
  changePointPosition: () => ({}),
};

export default context;
