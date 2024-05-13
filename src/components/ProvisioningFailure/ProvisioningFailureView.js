import { useState } from "react";

import ProvisioningFailureCards from "./ProvisioningFailureCards";
import ProvisioningFailureTSView from "./ProvisioningFailureTSView";

import "../../styles/ProvisioningFailure/ProvisioningFailureView.css";

const ProvisioningFailureView = () => {

    const [issueChange, setIssueChange] = useState(false);
    const [selectIssueCard, setSelectIssueCard] = useState([false, false, false]);

    function handleProvisioningFailureSelect(e) {
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
        <section className="provisioning-failure-view">
            {
                issueChange ?
                    <ProvisioningFailureTSView
                        issueChange={issueChange}
                        selectIssueCard={selectIssueCard}
                        handleCardsBackButton={handleCardsBackButton}
                    /> :
                    <ProvisioningFailureCards handleProvisioningFailureSelect={handleProvisioningFailureSelect} />
            }
        </section>
    );
}

export default ProvisioningFailureView; 