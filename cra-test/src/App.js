import logo from './logo.svg';
import './App.css';
import smallImg from './small.png';
import bigImg from './big.png';

function App() {
  return (
    <div className="App">
      <img src={bigImg} alt="big" />
      <img src={smallImg} alt="small" />
    </div>
  );
}

export default App;
