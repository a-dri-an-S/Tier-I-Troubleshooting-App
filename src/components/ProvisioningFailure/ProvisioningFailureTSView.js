import ModemRedView from "./ModemRedView";
import ModemFlashingWhiteView from "./ModemFlashingWhiteView";
import ModemBlueView from "./ModemBlueView"

const ProvisioningFailureTSView = ({ selectIssueCard }) => {
    return (
        <div className="provisioning-failure-ts-view">
            {
                (selectIssueCard[0] && <ModemRedView />) ||
                (selectIssueCard[1] && <ModemFlashingWhiteView />) ||
                (selectIssueCard[2] && <ModemBlueView />) 
            }
        </div>
    );
}

export default ProvisioningFailureTSView;