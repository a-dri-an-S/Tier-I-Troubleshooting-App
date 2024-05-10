import ModemRedView from "./ModemRedView";
import ModemFlashingWhiteView from "./ModemFlashingWhiteView";
import ModemBlueView from "./ModemBlueView"

const ProvisioningFailureTSView = ({ selectIssueCard, handleCardsBackButton }) => {
    return (
        <div className="provisioning-failure-ts-view">
            {
                (selectIssueCard[0] && <ModemRedView handleCardsBackButton={handleCardsBackButton}/>) ||
                (selectIssueCard[1] && <ModemFlashingWhiteView handleCardsBackButton={handleCardsBackButton}/>) ||
                (selectIssueCard[2] && <ModemBlueView handleCardsBackButton={handleCardsBackButton}/>) 
            }
        </div>
    );
}

export default ProvisioningFailureTSView;