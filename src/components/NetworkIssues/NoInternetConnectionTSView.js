import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import RebootFactoryResetModem from "../TroubleshootingCards/RebootFactoryResetModem";
import ReleaseRenewIPView from "./ReleaseRenewIPView";

import "../../styles/NetworkIssues/NoInternetConnectionTSView.css";

const NoInternetConnectionTSView = ({ selectTSCard, handleBackButton }) => {
    return (
        <div className="no-internet-connection-ts-view">
            {
                (selectTSCard[0] && <RebootFactoryResetModem />) ||
                (selectTSCard[1] && <ReleaseRenewIPView />)

            }
            <button
                className="back-btn"
                onClick={() => handleBackButton()}
            >
                <FontAwesomeIcon icon={faArrowLeft} />
            </button>
        </div>
    );
}

export default NoInternetConnectionTSView;