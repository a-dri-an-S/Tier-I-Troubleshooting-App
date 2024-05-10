import ModemOfflineView from "./ModemOfflineView";
import NoWifiView from "./NoWifiView";
import EthernetPortView from "./EthernetPortView";

const ModemIssuesTSView = ({ selectIssueCard, handleCardsBackButton }) => {
    return (
        <div className="modem-issues-ts-view">
            {
                (selectIssueCard[0] && <ModemOfflineView handleCardsBackButton={handleCardsBackButton}/>) ||
                (selectIssueCard[1] && <NoWifiView handleCardsBackButton={handleCardsBackButton}/>) ||
                (selectIssueCard[2] && <EthernetPortView handleCardsBackButton={handleCardsBackButton}/>)
            }
        </div>
    );
}

export default ModemIssuesTSView;