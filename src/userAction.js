export const getAllUsers = (users) => {
	console.log(users);
	return {
		type: 'GET_USERS',
		payload: users,
	};
};
