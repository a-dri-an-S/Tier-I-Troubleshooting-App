import { useState } from "react";

import SpeedTestCards from "./SpeedTestCards";
import SpeedTestTSView from "./SpeedTestTSView";

const SpeedTestView = () => {

    const [troubleshootChange, setTroubleshootChange] = useState(false);
    const [selectTSCard, setSelectTSCard] = useState([false, false, false]);

    function handleSpeedTestSelect(e) {
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

    // function handleBackButton() {
    //     setTroubleshootChange(false);
    //     setSelectTSCard([false, false, false]);
    // }

    return (
        <div className="speed-test-view">
            {
                troubleshootChange ?
                    <SpeedTestTSView selectTSCard={selectTSCard}/> :
                    <SpeedTestCards handleSpeedTestSelect={handleSpeedTestSelect}/>
            }
        </div>
    );
}

export default SpeedTestView;