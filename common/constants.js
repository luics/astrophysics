const KM = 1000;
const AU = 149597870 * KM;
const LIGHT_YEAR = 9.46e12 * KM;
const LY = LIGHT_YEAR;
const MINUTE = 60;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;
const YEAR = 365.25 * DAY;
const KG = 1000;

const SOLAR_SYSTEM = {
  star: {
    radius: 1400000 * KM,
    quality: 2e33,
    element: {
      H: 0.71,
      He: 0.27
    }
  },
  planet: {
    earth: {
      revolution: YEAR,
      rotation: DAY,
      linearDistance: AU,
      radius: 6400 * KM,
      element: {
        He2: 0.78,
        O2: 0.21,
        Ar: 0.0093,
        CO2: 0.0003,
        Ne: 0.000018
      },
      satellite: {
        moon: {
          linearDistance: 384000 * KM,
          radius: 1738 * KM
        }
      }
    },
    mercury: {
      revolution: 88 * DAY,
      linearDistance: 0.4 * AU,
      //angleDistance:
      radius: 2440 * KM,
      satellite: null,
      avgSurfaceTem: 179,
      maxSurfaceTem: 427,
      minSurfaceTem: -173
    },
    venus: {
      revolution: 225 * DAY,
      linearDistance: 0.7 * AU,
      satellite: {}
    },
    mars: {
      revolution: 687 * DAY,
      rotation: 24 * HOUR + 37 * MINUTE + 22.6,
      linearDistance: 1.5 * AU,
      radius: 3395 * KM,
      element: {
        CO2: 0.95,
        Ne: 0.000018
      },
      satellite: {
        one: {},
        two: {}
      }
    },
    jupiter: {
      revolution: 11.9 * YEAR,
      //linearDistance: 0.7 * AU,
      radius: 71400 * KM,
      satellite: {
        length: 63
      }
    },
    saturn: {
      revolution: 29.5 * YEAR,
      linearDistance: 9.6 * AU,
      radius: 71400 * KM,
      satellite: {
        length: 48
      }
    },
    uranus: {
      revolution: 84 * YEAR,
      linearDistance: 19.3 * AU,
      radius: 25900 * KM,
      element: {
        H2: 0.83,
        He2: 0.15,
        CH4: 0.02
      },
      satellite: {
        length: 27
      }
    },
    neptune: {
      revolution: 165 * YEAR,
      linearDistance: 30 * AU,
      radius: 24700 * KM,
      element: {
        H2: 0.83,
        He2: 0.15,
        CH4: 0.02
      },
      satellite: {
        length: 13
      }
    }
  }
};


module.exports = {
  SOLAR_SYSTEM
};
