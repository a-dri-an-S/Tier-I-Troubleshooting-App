import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

import MainRoutes from "./routes/MainRoutes.js";
import './styles/App.css';

function App() {
  const [toggleDark, setToggleDark] = useState(false);

  const location = useLocation();
  const renderHomeBtn = location.pathname !== "/";

  const toggleApp = `app ${toggleDark ? 'dark-app' : 'light-app'}`
  const toggleBtn = `toggle-btn ${toggleDark ? 'dark-tgl' : 'light-tgl'}`
  const toggleHomeBtn = `home-btn ${toggleDark ? 'dark-home-btn' : 'light-home-btn'}`

  return (
    <div className={toggleApp}>
      <header className="header">
        <button
          className={toggleBtn}
          onClick={() => setToggleDark(!toggleDark)}
        >
          {
            toggleDark ?
              <FontAwesomeIcon icon={faSun} /> :
              <FontAwesomeIcon icon={faMoon} />
          }
        </button>
        {
          renderHomeBtn &&
          <Link to="/">
            <button className={toggleHomeBtn} >
              <FontAwesomeIcon icon={faHome} />
            </button>
          </Link>
        }
      </header>
      <MainRoutes toggleDark={toggleDark}/>
    </div>
  );
}

export default App;
