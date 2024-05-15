import { useState } from "react";

import QOICards from "./QOICards";
import QOITSView from "./QOITSView";

const QOIView = () => {

    const [issueChange, setIssueChange] = useState(false);
    const [selectIssueCard, setSelectIssueCard] = useState([false, false, false, false, false]);

    function handleQOISelect(e) {
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

    function handleCardsBackButton () {
        setIssueChange(false);
        setSelectIssueCard([false, false, false, false, false])
    }

    return (
        <section className="qoi-view">
            {
                issueChange ?
                    <QOITSView 
                        selectIssueCard={selectIssueCard}
                        handleCardsBackButton={handleCardsBackButton}
                    /> :
                    <QOICards handleQOISelect={handleQOISelect}/>
            }
        </section>
    );
}

export default QOIView;