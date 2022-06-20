export const ACTIONS = {
  API_REQUEST: "api-request",
  FETCH_DATA: "fetch-data",
  ERROR: "error",
};

export const initialState = {
  data: [],
  loading: false,
  error: null,
};

export const apiReducer = (state, { type, payload }) => {
  //   console.log(payload);

  switch (type) {
    case ACTIONS.API_REQUEST:
      return { ...state, data: [], loading: true };
    case ACTIONS.FETCH_DATA:
      return { ...state, data: payload.data, loading: false };
    case ACTIONS.ERROR:
      return { ...state, data: [], error: payload };

    default:
      return state;
  }
};
