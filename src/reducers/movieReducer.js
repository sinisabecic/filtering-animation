export const initialState = {
  watchlist: localStorage.getItem("watchlist")
    ? JSON.parse(localStorage.getItem("watchlist"))
    : [],
  watched: localStorage.getItem("watched")
    ? JSON.parse(localStorage.getItem("watched"))
    : [],
};

export const movieReducer = (state, action) => {
  switch (action.type) {
    case "ADD_MOVIE_TO_WATCHLIST":
      return { ...state, watchlist: [action.payload, ...state.watchlist] };
    case "MARK_AS_WATCHED":
      return { ...state, watched: [action.payload, ...state.watched] };
    default:
      return state;
  }
};
