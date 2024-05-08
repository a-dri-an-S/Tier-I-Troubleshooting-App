import { useState } from "react";

import UnableToFindSatCards from "./UnableToFindSatCards";
import UnableToFindSatTSView from "./UnableToFindSatTSView";

const UnableToFindSatView = () => {

    const [troubleshootChange, setTroubleshootChange] = useState(false);
    const [selectTSCard, setSelectTSCard] = useState([false, false, false, false, false, false, false, false, false, false]);

    function handleUnableToFindSatSelect(e) {
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
        setSelectTSCard([false, false, false, false, false, false, false, false, false, false]);
    }


    return (
        <div className="unable-to-find-sat-view">
            {
                troubleshootChange ?
                    <UnableToFindSatTSView
                        selectTSCard={selectTSCard}
                        handleBackButton={handleBackButton}
                    /> :
                    <UnableToFindSatCards handleUnableToFindSatSelect={handleUnableToFindSatSelect} />
            }
        </div>
    );
}

export default UnableToFindSatView;