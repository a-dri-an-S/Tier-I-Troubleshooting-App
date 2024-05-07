import { useState } from "react";

import NoWifiCards from "./NoWifiCards";
import NoWifiTSView from "./NoWifiTSView";

const NoWifiView = () => {

    const [troubleshootChange, setTroubleshootChange] = useState(false);
    const [selectTSCard, setSelectTSCard] = useState([false, false, false, false]);
    
    function handleNoWifiSelect(e) {
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
        <section className="no-wifi-view">
            {
                troubleshootChange ? 
                <NoWifiTSView 
                    selectTSCard={selectTSCard}
                    handleBackButton={handleBackButton}
                />:
                <NoWifiCards handleNoWifiSelect={handleNoWifiSelect}/>
            }
        </section>
    );
}

export default NoWifiView;