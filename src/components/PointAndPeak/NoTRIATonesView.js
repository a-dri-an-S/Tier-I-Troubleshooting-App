import { useState } from "react";

import NoTRIAToneCards from "./NoTRIAToneCards";
import NoTRIATonesTSView from "./NoTRIATonesTSView";

const NoTRIATones = ({ handleCardsBackButton }) => {

    const [troubleshootChange, setTroubleshootChange] = useState(false);
    const [selectTSCard, setSelectTSCard] = useState([false, false, false, false]);

    function handleNoTRIATonesSelect(e) {
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
        setSelectTSCard([false, false, false, false]);
    }

    return (
        <div className="no-tria-tones-view">
            {
                troubleshootChange ?
                    <NoTRIATonesTSView
                        selectTSCard={selectTSCard}
                        handleBackButton={handleBackButton}
                    /> :
                    <NoTRIAToneCards 
                        handleNoTRIATonesSelect={handleNoTRIATonesSelect} 
                        handleCardsBackButton={handleCardsBackButton}
                    />
            }
        </div>
    );
}

export default NoTRIATones;