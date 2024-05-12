import { useState } from "react";

import ReleaseRenewIPCards from "./ReleaseRenewIPCards";
import ReleaseRenewIPTSView from "./ReleaseRenewIPTSView";

const ReleaseRenewIPView = ({ handleTSCardsBackButton }) => {

    const [troubleshootChange, setTroubleshootChange] = useState(false);
    const [selectTSCard, setSelectTSCard] = useState([false, false, false]);

    function handleReleaseRenewIPSelect(e) {
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

    return (
        <div className="release-renew-ip-view">
            {
                troubleshootChange ?
                    <ReleaseRenewIPTSView 
                        selectTSCard={selectTSCard}
                        handleBackButton={handleBackButton}
                    /> :
                    <ReleaseRenewIPCards 
                        handleReleaseRenewIPSelect={handleReleaseRenewIPSelect}
                        handleTSCardsBackButton={handleTSCardsBackButton}
                    />
            }
        </div>
    );
}

export default ReleaseRenewIPView;