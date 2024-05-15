import AntennaPointingView from "./AntennaPointingView";
import APAfterburnerView from "./APAfterburnerView";
import EquipmentView from "./EquipmentView";
import SoftwareView from "./SoftwareView"
import InstalledDeviceView from "./InstalledDeviceView";

const QOITSView = ({ selectIssueCard, handleCardsBackButton }) => {
    return (
        <div className="qoi-ts-view">
            {
                (selectIssueCard[0] && <AntennaPointingView handleCardsBackButton={handleCardsBackButton}/>) ||
                (selectIssueCard[1] && <APAfterburnerView handleCardsBackButton={handleCardsBackButton}/>) ||
                (selectIssueCard[2] && <EquipmentView handleCardsBackButton={handleCardsBackButton}/>) ||
                (selectIssueCard[3] && <SoftwareView handleCardsBackButton={handleCardsBackButton}/>) ||
                (selectIssueCard[4] && <InstalledDeviceView handleCardsBackButton={handleCardsBackButton}/>)
            }
        </div>
    );
}

export default QOITSView;