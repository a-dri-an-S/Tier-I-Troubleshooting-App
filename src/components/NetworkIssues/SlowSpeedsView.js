import { useState } from "react";

import SlowSpeedsCards from "./SlowSpeedsCards";
import SlowSpeedsTSView from "./SlowSpeedsTSView";

const SlowSpeedsView = ({ handleCardsBackButton }) => {

    const [troubleshootChange, setTroubleshootChange] = useState(false);
    const [selectTSCard, setSelectTSCard] = useState([false, false, false]);

    function handleSlowSpeedsSelect(e) {
        const idx = e.target.id;
        const updatedState = selectTSCard.map((el, i) => {
            if (i === +idx) {
                return true;
            } else {
                return false;
            }
        });
        setTroubleshootChange(true);
        setSelectTSCard(updatedState);
    }

    function handleBackButton() {
        setTroubleshootChange(false);
        setSelectTSCard([false, false, false]);
    }

    function handleTSCardsBackButton () {
        setTroubleshootChange(false);
        setSelectTSCard([false, false, false])
    }

    return (
        <div className="slow-speeds-view">
            {
                troubleshootChange ?
                    <SlowSpeedsTSView
                        selectTSCard={selectTSCard}
                        handleBackButton={handleBackButton}
                        handleTSCardsBackButton={handleTSCardsBackButton}
                    /> :
                    <SlowSpeedsCards 
                        handleSlowSpeedsSelect={handleSlowSpeedsSelect} 
                        handleCardsBackButton={handleCardsBackButton}
                    />
            }
        </div>
    );
}

export default SlowSpeedsView;