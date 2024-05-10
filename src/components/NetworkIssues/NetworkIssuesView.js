import { useState } from "react";

import NetworkIssuesCards from "./NetworkIssuesCards";
import NetworkIssuesTSView from "./NetworkIssuesTSView";

import "../../styles/NetworkIssues/NetworkIssuesView.css";

const NetworkIssuesView = () => {
    
    const [issueChange, setIssueChange] = useState(false);
    const [selectIssueCard, setSelectIssueCard] = useState([false, false]);

    function handleNetworkIssueSelect(e) {
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
        setSelectIssueCard([false, false, false])
    }
    
    return (
        <section className="network-issues-view">
            {
                issueChange ?
                    <NetworkIssuesTSView 
                        selectIssueCard={selectIssueCard}
                        handleCardsBackButton={handleCardsBackButton}
                    /> :
                    <NetworkIssuesCards handleNetworkIssueSelect={handleNetworkIssueSelect}/>
            }
        </section>
    );
}

export default NetworkIssuesView;