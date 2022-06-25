
import CounterContainer from './components/CounterContainer';
import LogMenuContainer from './components/LogMenuContainer';
import ChessContainer from './components/ChessContainer';

function App() {
  return (

    <div className="App">
      <CounterContainer className="counter" />
      <LogMenuContainer className="logMenu" />
      <ChessContainer className="chess" />
    </div>
  );
}

export default App;
