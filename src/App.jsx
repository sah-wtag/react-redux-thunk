import { useDispatch, useSelector } from 'react-redux';
import { incrementAsync, fetchUsers } from './store/actions';

function App() {
  const { count, loading, users, usersLoading, usersError } = useSelector(state => state);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementAsync());
  };

  const handleFetchUsers = () => {
    dispatch(fetchUsers());
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Redux Thunk + Vite</h1>

      {/* Counter Section */}
      <h2>Count: {count}</h2>
      {loading && <p>Loading...</p>}
      <button onClick={handleIncrement} disabled={loading}>
        Increase After 2 Seconds
      </button>

      <hr />

      {/* Users Section */}
      <h2>Users</h2>
      <button onClick={handleFetchUsers} disabled={usersLoading}>
        {usersLoading ? 'Fetching...' : 'Fetch Users'}
      </button>

      {usersError && <p style={{ color: 'red' }}>Error: {usersError}</p>}

      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
