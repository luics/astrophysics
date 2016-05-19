const KM = 1000;
const AU = 149597870 * KM;

const SOLAR_SYSTEM = {
  star: {},
  planet: {
    mercury: {
      solarDistance: 0.5 * AU,
      satellite: null
    },
    venus: {
      solarDistance: 0.7 * AU,
      satellite: {}
    },
    earth: {
      solarDistance: AU,
      satellite: {
        moon: {}
      }
    }
  }
};


module.exports = {
  SOLAR_SYSTEM
};
