export const getAllUsers = (payload) => {
  return {
    type: 'GET_USERS',
    payload,
  };
};
