// This is our thunk action: returns a function that does async work, 
// then dispatches real actions.
export const incrementAsync = () => {
  return (dispatch, getState) => {
    dispatch({ type: 'INCREMENT_REQUEST' });

    setTimeout(() => {
      dispatch({ type: 'INCREMENT_SUCCESS' });
    }, 2000);
  };
};
