import { useState } from "react";

import InstalledDeviceCards from "./InstalledDeviceCards";
import InstalledDeviceTSView from "./InstalledDeviceTSView";

const InstalledDeviceView = () => {

    const [troubleshootChange, setTroubleshootChange] = useState(false);
    const [selectTSCard, setSelectTSCard] = useState([false]);

    function handleInvalidDeviceSelect(e) {
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
        setSelectTSCard([false]);
    }

    return (
        <section className="invalid-device-view">
            {
                troubleshootChange ?
                    <InstalledDeviceTSView
                        selectTSCard={selectTSCard}
                        handleBackButton={handleBackButton}
                    /> :
                    <InstalledDeviceCards handleInvalidDeviceSelect={handleInvalidDeviceSelect} />
            }
        </section>
    );
}

export default InstalledDeviceView;