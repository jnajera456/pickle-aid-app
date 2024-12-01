import logo from '../pickle-logo.png';
import '../styling sheets/HomePage.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Got Yourself in A Pickle?
        </h1>
        <p>
          Look for your problem and get some advice!
        </p>
      </header>
    </div>
  );
}

export default App;
