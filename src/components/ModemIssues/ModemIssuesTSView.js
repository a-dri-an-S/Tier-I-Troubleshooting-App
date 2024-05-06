import ModemOfflineView from "./ModemOfflineView";
import NoWifiView from "./NoWifiView";
import EthernetPortView from "./EthernetPortView";


const ModemIssuesTSView = ({ selectIssueCard }) => {
    return (
        <div className="modem-issues-ts-view">
            {
                (selectIssueCard[0] && <ModemOfflineView />) ||
                (selectIssueCard[1] && <NoWifiView />) ||
                (selectIssueCard[2] && <EthernetPortView />)

            }
        </div>
    );
}

export default ModemIssuesTSView;