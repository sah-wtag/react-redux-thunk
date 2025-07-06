const initialState = {
  count: 0,
  loading: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT_REQUEST':
      return { ...state, loading: true };
    case 'INCREMENT_SUCCESS':
      return { ...state, count: state.count + 1, loading: false };
    default:
      return state;
  }
}
