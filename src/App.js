import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

import MainRoutes from "./routes/MainRoutes.js";
import './styles/App.css';

function App() {
  const location = useLocation();
  const renderHomeBtn = location.pathname !== "/";

  return (
    <div className="app">
      {
        renderHomeBtn &&
        <header className="header">
          <Link to="/">
            <button className="home-btn" >
              <FontAwesomeIcon icon={faHome} />
            </button>
          </Link>
        </header>
      }
      <MainRoutes />
    </div>
  );
}

export default App;
