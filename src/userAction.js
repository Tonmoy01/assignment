export const getAllusers = (users) => {
  return {
    type: 'GET_USRES',
    payload: users,
  };
};
