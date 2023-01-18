import logo from './logo.svg';
import './App.css';
import smallImg from './small.png';
import bigImg from './big.png';
import TodoList from './TodoList';

function App() {
  return (
    <div className="App">
      <img src={bigImg} alt="big" />
      <img src={smallImg} alt="small" />
      <TodoList />
    </div>
  );
}

export default App;
