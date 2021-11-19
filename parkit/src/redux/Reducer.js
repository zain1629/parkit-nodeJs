const INITIAL_STATE = {
  parkingSpaces: [],
  selectedParkingSpace: null,
  userData: null,
  userActivity: [],
  showModal: false,
  detectedActivity: [],
  currentActiveParkingSpace: null,
};

const rootReducer = function spaces(state = INITIAL_STATE, action) {
  let {
    parkingSpaces,
    selectedParkingSpace,
    userData,
    userActivity,
    showModal,
    detectedActivity,
    currentActiveParkingSpace,
  } = state;
};

export default rootReducer;
