import { useState } from "react";

import SoftwareCards from "./SoftwareCards";
import SoftwareTSView from "./SoftwareTSView";
import { faLessThanEqual } from "@fortawesome/free-solid-svg-icons/faLessThanEqual";

const SoftwareView = () => {

    const [troubleshootChange, setTroubleshootChange] = useState(false);
    const [selectTSCard, setSelectTSCard] = useState([faLessThanEqual]);

    function handleSoftwareSelect(e) {
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
        <section className="software-view">
            {
                troubleshootChange ?
                    <SoftwareTSView
                        selectTSCard={selectTSCard}
                        handleBackButton={handleBackButton}
                    /> :
                    <SoftwareCards handleSoftwareSelect={handleSoftwareSelect} />
            }
        </section>
    );
}

export default SoftwareView;