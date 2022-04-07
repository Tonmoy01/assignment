const INITIAL_STATE = {
	data: [],
};

export default function userReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case 'GET_USERS':
			return { ...state, data: action.payload };
		default:
			return state;
	}
}
