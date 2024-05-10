import { useState } from "react";

import PointAndPeakCards from "./PointAndPeakCards";
import PointAndPeakTSView from "./PointAndPeakTSView";

import "../../styles/PointAndPeak/PointAndPeakView.css";

const PointAndPeakView = () => {

    const [issueChange, setIssueChange] = useState(false);
    const [selectIssueCard, setSelectIssueCard] = useState([false, false, false]);

    function handlePointAndPeakSelect(e) {
        const idx = e.target.id;
        const updatedState = selectIssueCard.map((el, i) => {
            if (i === +idx) {
                return true;
            } else {
                return false;
            }
        });
        setIssueChange(true);
        setSelectIssueCard(updatedState);
    }

    function handleCardsBackButton() {
        setIssueChange(false);
        setSelectIssueCard([false, false, false])
    }


    return (
        <section className="pnp-view">
            {
                issueChange ?
                    <PointAndPeakTSView
                        selectIssueCard={selectIssueCard}
                        handleCardsBackButton={handleCardsBackButton}
                    /> :
                    <PointAndPeakCards handlePointAndPeakSelect={handlePointAndPeakSelect} />
            }
        </section>
    );
}

export default PointAndPeakView;