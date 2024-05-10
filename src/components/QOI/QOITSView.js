import AntennaPointingView from "./AntennaPointingView";
import EquipmentView from "./EquipmentView";
import SoftwareView from "./SoftwareView"
import InstalledDeviceView from "./InstalledDeviceView";

const QOITSView = ({ selectIssueCard, handleCardsBackButton }) => {
    return (
        <div className="qoi-ts-view">
            {
                (selectIssueCard[0] && <AntennaPointingView handleCardsBackButton={handleCardsBackButton}/>) ||
                (selectIssueCard[1] && <EquipmentView handleCardsBackButton={handleCardsBackButton}/>) ||
                (selectIssueCard[2] && <SoftwareView handleCardsBackButton={handleCardsBackButton}/>) ||
                (selectIssueCard[3] && <InstalledDeviceView handleCardsBackButton={handleCardsBackButton}/>)
            }
        </div>
    );
}

export default QOITSView;