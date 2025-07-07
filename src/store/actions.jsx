// This is our thunk action: returns a function that does async work, 
// then dispatches real actions.
export const incrementAsync = () => {
  return (dispatch) => {
    dispatch({ type: 'INCREMENT_REQUEST' });

    setTimeout(() => {
      dispatch({ type: 'INCREMENT_SUCCESS' });
    }, 2000);
  };
};

// Thunk to fetch users
export const fetchUsers = () => {
  return async (dispatch) => {
    dispatch({ type: 'FETCH_USERS_REQUEST' });

    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await res.json();

      dispatch({ type: 'FETCH_USERS_SUCCESS', payload: data });
    } catch (error) {
      dispatch({ type: 'FETCH_USERS_FAILURE', payload: error.message });
    }
  };
};
