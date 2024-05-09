import AntennaPointingView from "./AntennaPointingView";
import EquipmentView from "./EquipmentView";
import SoftwareView from "./SoftwareView"
import InstalledDeviceView from "./InstalledDeviceView";

const QOITSView = ({ selectIssueCard }) => {
    return (
        <div className="qoi-ts-view">
            {
                (selectIssueCard[0] && <AntennaPointingView />) ||
                (selectIssueCard[1] && <EquipmentView />) ||
                (selectIssueCard[2] && <SoftwareView />) ||
                (selectIssueCard[3] && <InstalledDeviceView />)
            }
        </div>
    );
}

export default QOITSView;