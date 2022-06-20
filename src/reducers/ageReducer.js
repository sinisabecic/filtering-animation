export const ageReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ONE":
      return state + 1;
    case "ADD_THREE":
      return state + 3;
    case "ADD_NUM":
      return state + Number(action.num);

    default:
      return state;
  }
};
