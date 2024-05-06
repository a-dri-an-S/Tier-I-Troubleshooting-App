import { useState } from "react";
import MainView from "./components/MainView.js";
import IssueView from "./components/IssueView.js";

import './styles/App.css';

function App() {

  // Make sure to change viewChange back to false
  const [viewChange, setViewChange] = useState(false);
  const [selectMainCard, setSelectMainCard] = useState([false, false, false, false ,false]);
  

  function handleSelectedMainCard(e) {
    const idx = e.target.id;
    const updatedState = selectMainCard.map((el, i) => {
      if (i === +idx) {
        return true;
      } else {
        return false;
      }
    })
    setSelectMainCard(updatedState);
    setViewChange(true);
    return;
  }

  function handleHomeButton() {
    setSelectMainCard([false, false, false, false ,false]);
    setViewChange(false);
  }



  return (
    <div className="app">
      {
        viewChange ? 
        <IssueView 
          handleHomeButton={handleHomeButton}
          selectMainCard={selectMainCard}
        />:
        <MainView handleSelectedMainCard={handleSelectedMainCard} />
      }
    </div>
  );
}

export default App;
