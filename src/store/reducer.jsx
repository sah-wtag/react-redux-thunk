const initialState = {
  count: 0,
  loading: false,
  users: [],
  usersLoading: false,
  usersError: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT_REQUEST':
      return { ...state, loading: true };
    case 'INCREMENT_SUCCESS':
      return { ...state, count: state.count + 1, loading: false };
    case 'FETCH_USERS_REQUEST':
      return { ...state, usersLoading: true, usersError: null };
    case 'FETCH_USERS_SUCCESS':
      return { ...state, usersLoading: false, users: action.payload };
    case 'FETCH_USERS_FAILURE':
      return { ...state, usersLoading: false, usersError: action.payload };
    default:
      return state;
  }
}
