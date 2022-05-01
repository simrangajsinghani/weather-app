const data = [
  {
    coord: { lon: -0.1257, lat: 51.5085 },
    weather: [
      {
        id: 803,
        main: "Clouds",
        description: "broken clouds",
        icon: "04d",
      },
    ],
    base: "stations",
    main: {
      temp: 284.29,
      feels_like: 282.48,
      temp_min: 281.31,
      temp_max: 285.76,
      pressure: 1006,
      humidity: 39,
    },
    visibility: 10000,
    wind: { speed: 1.34, deg: 300, gust: 5.36 },
    clouds: { all: 77 },
    dt: 1620316720,
    sys: {
      type: 2,
      id: 2019646,
      country: "GB",
      sunrise: 1620274981,
      sunset: 1620329470,
    },
    timezone: 3600,
    id: 2643743,
    name: "London",
    cod: 200,
  },
  {
    coord: { lon: -122.3321, lat: 47.6062 },
    weather: [
      {
        id: 804,
        main: "Clouds",
        description: "overcast clouds",
        icon: "04d",
      },
    ],
    base: "stations",
    main: {
      temp: 287.62,
      feels_like: 286.85,
      temp_min: 285.75,
      temp_max: 289.08,
      pressure: 1012,
      humidity: 66,
    },
    visibility: 10000,
    wind: { speed: 2.24, deg: 174, gust: 5.81 },
    clouds: { all: 90 },
    dt: 1620318895,
    sys: {
      type: 2,
      id: 2004026,
      country: "US",
      sunrise: 1620305024,
      sunset: 1620358083,
    },
    timezone: -25200,
    id: 5809844,
    name: "Seattle",
    cod: 200,
  },
];

export default data;
