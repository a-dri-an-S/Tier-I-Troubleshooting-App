import { useState } from "react";

import APAfterburnerCards from "./APAfterburnerCards";
import APAfterburnerTSView from "./APAfterburnerTSView";

const APAfterburnerView = ({ handleCardsBackButton }) => {

    const [troubleshootChange, setTroubleshootChange] = useState(false);
    const [selectTSCard, setSelectTSCard] = useState([false, false]);

    function handleAPAfterburnerSelect(e) {
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

    function handleTSCardsBackButton () {
        setTroubleshootChange(false);
        setSelectTSCard([false, false])
    }

    return (
        <section className="ap-afterburner-view">
            {
                troubleshootChange ?
                    <APAfterburnerTSView
                        selectTSCard={selectTSCard}
                        handleTSCardsBackButton={handleTSCardsBackButton}
                    /> :
                    <APAfterburnerCards
                        handleAPAfterburnerSelect={handleAPAfterburnerSelect}
                        handleCardsBackButton={handleCardsBackButton}
                    />
            }
        </section>
    );
}

export default APAfterburnerView;