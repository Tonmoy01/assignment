const INITIAL_STATE = {
  data: [],
  loading: true,
};

export default function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'GET_LOADING':
      return {
        ...state,
        loading: true,
      };
    case 'GET_USERS':
      return { ...state, data: action.payload, loading: false };
    default:
      return state;
  }
}
