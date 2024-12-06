import React from 'react';
import logo from '../pickle-logo.png';
import '../styling-sheets/HomePage.css';
import { useRef } from "react";
import cx from 'classnames';

function App() {
  const buttonRef = useRef();
  return (
    <div>
      <div className="AppHeader">
        <div className="leftHeaderContainer">
          <h1 className ="leftTitle">
          Got Yourself In A Pickle? </h1>
          <p className ="mainParagraph">
          You don't have to "dill" with it alone! Find solutions to whatever’s weighing you down and reclaim your peace of mind! Explore tools designed to help you navigate college life with ease.
          </p>
        </div>
        <img src={logo} className="logoContainer" alt="logo" />
      </div>
      <div className = "buttonsContainer">
        <a className={cx("pageNavigator","shadow")}ref={buttonRef} >Academic Stress</a>
        <a className={cx("pageNavigator","shadow")}>Emotional <br/>Well-being</a>
        <a className={cx("pageNavigator","shadow")}>Social Challenges</a>
        <a className={cx("pageNavigator","shadow")}>Life Balance</a>
      </div>
    </div>
  );
}

export default App;
