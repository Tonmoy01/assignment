const INNITIAL_STATE = {
  data: [],
  loading: false,
};

export default function userReducer(state = INNITIAL_STATE, action) {
  switch (action.type) {
    case GET_USRES:
      return { ...state, data: action.users };
    default:
      return state;
  }
}
