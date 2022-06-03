const INITIAL_STATE = {
  isSingedIN: null,
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SING_IN":
      return { ...state, isSingedIN: true };
    case "SING_OUT":
      return { ...state, isSingedIN: false };
    default:
      return state;
  }
};
