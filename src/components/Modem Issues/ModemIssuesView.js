import { useState } from "react";

import ModemIssuesCards from "./ModemsIssueCards";

import "../../styles/ModemIssuesView.css";

const ModemIssueView = () => {

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
        <section className="modem-issue-view">
            <h1 className="modem-issue-title">Modem Issues</h1>
            {
                issueChange ? 
                <div>Hi</div> :
                <ModemIssuesCards handleModemIssueSelect={handleModemIssueSelect}/>

            }
        </section>
    );
}

export default ModemIssueView;