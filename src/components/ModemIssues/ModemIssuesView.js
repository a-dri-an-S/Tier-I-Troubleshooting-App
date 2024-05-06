import { useState } from "react";

import ModemIssuesCards from "./ModemsIssueCards";
import ModemIssuesTSView from "./ModemIssuesTSView";

import "../../styles/ModemIssues/ModemIssuesView.css";

const ModemIssuesView = () => {

    const [issueChange, setIssueChange] = useState(false);
    const [selectIssueCard, setSelectIssueCard] = useState([false, false, false]);

    function handleModemIssueSelect(e) {
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

    return (
        <section className="modem-issues-view">
            {
                issueChange ?
                    <ModemIssuesTSView 
                        selectIssueCard={selectIssueCard}
                    /> :
                    <ModemIssuesCards handleModemIssueSelect={handleModemIssueSelect} />
            }
        </section>
    );
}

export default ModemIssuesView;