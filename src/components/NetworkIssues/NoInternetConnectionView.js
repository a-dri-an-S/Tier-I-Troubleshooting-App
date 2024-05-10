import { useState } from "react";

import NoInternetConnectionCards from "./NoInternetConnectionCards";
import NoInternetConnectionTSView from "./NoInternetConnectionTSView";

const NoInternetConnectionView = ({ handleCardsBackButton }) => {

    const [troubleshootChange, setTroubleshootChange] = useState(false);
    const [selectTSCard, setSelectTSCard] = useState([false, false]);

    function handleNoInternetConnectionSelect(e) {
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
        setSelectTSCard([false, false]);
    }

    return (
        <div className="no-internet-connection-view">
            {
                troubleshootChange ?
                    <NoInternetConnectionTSView
                        selectTSCard={selectTSCard}
                        handleBackButton={handleBackButton}
                    /> :
                    <NoInternetConnectionCards  
                        handleNoInternetConnectionSelect={handleNoInternetConnectionSelect} 
                        handleCardsBackButton={handleCardsBackButton}
                    />
            }

        </div>
    );
}

export default NoInternetConnectionView;