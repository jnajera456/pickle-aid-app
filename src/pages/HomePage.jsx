import React from 'react';
import '../styling-sheets/HomePage.css';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import logo from '../pickle-logo.png';

function HomePage() {
  return (
    <div>
      <div className="AppHeader">
        <div className="leftHeaderContainer">
          <h1 className="leftTitle">Got Yourself In A Pickle?</h1>
          <p className="mainParagraph">
            You don't have to "dill" with it alone! Find solutions to whatever’s
            weighing you down and reclaim your peace of mind! Explore tools
            designed to help you navigate college life with ease.
          </p>
        </div>
        <img src={logo} className="logoContainer" alt="logo" />
      </div>
      <div className="pageNavigatorsContainer">
        <Link to="/AcademicStress" className={cx('pageNavigator', 'shadow')}>
          Academic Stress
        </Link>
        <div className={cx('pageNavigator', 'shadow')}>
          Emotional <br />
          Well-being
        </div>
        <div className={cx('pageNavigator', 'shadow')}>Social Challenges</div>
        <div className={cx('pageNavigator', 'shadow')}>Life Balance</div>
      </div>
    </div>
  );
}

export default HomePage;
