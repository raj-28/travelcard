import logo from './logo.svg';
import './App.css';
import Cell from './component/Cell';
import { Header } from './component/Header';

const DataArr = Array(8)
  .fill(0)
  .map(Number.call, Number);

function App() {
  
  return (
    <div className="App">
    {Header}
   {DataArr.map((val, i) => (
      <Cell key={i} index={i} />
    ))}
  </div>
  );
}

export default App;


