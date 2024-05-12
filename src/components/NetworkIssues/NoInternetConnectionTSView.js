import RebootFactoryResetModem from "../TroubleshootingCards/RebootFactoryResetModem";
import ReleaseRenewIPView from "./ReleaseRenewIPView";

import "../../styles/NetworkIssues/NoInternetConnectionTSView.css";

const NoInternetConnectionTSView = ({ selectTSCard, handleBackButton, handleTSCardsBackButton }) => {
    return (
        <div className="no-internet-connection-ts-view">
            {
                (selectTSCard[0] && <RebootFactoryResetModem handleBackButton={handleBackButton}/>) ||
                (selectTSCard[1] && <ReleaseRenewIPView handleTSCardsBackButton={handleTSCardsBackButton}/>)

            }
        </div>
    );
}

export default NoInternetConnectionTSView;