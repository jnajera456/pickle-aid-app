import logo from '../pickle-logo.png';
import '../styling sheets/HomePage.css';


function App() {
  return (
    <div>
      <div className="App-header">
        <div className="left-header">
          <h1 className ="mainHeader">
          Got Yourself In A Pickle? </h1>
          <p className ="mainParagraph">
          Find solutions to whatever’s weighing you down and reclaim your peace of mind! Explore tools designed to help you navigate college life with ease. </p>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <div className = "buttons">
        <button className="buttonOne">Academic Stress</button>
        <button className="buttonTwo">Emotional Well-being</button>
        <button className="buttonThree">Social Challenges</button>
        <button className="buttonFour">Life Balance</button>
      </div>
    </div>
  );
}

export default App;
