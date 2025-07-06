import { useSelector, useDispatch } from 'react-redux';
import { incrementAsync } from './store/actions';

function App() {
  const count = useSelector((state) => state.count);
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(incrementAsync());
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>React+ Redux Thunk</h1>
      <h2>Count: {count}</h2>
      {loading && <p>Loading...</p>}
      <button onClick={handleClick} disabled={loading}>
        Increase After 2 Seconds
      </button>
    </div>
  );
}

export default App;
