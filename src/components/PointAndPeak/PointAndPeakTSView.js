import NoTRIATonesView from "./NoTRIATonesView";
import UnableToFindSatView from "./UnableToFindSatView";
import ModemLockView from "./ModemLockView";

const PointAndPeakTSView = ({ selectIssueCard, handleCardsBackButton }) => {
    return (
        <div className="pnp-ts-view">
            {
                (selectIssueCard[0] && <NoTRIATonesView handleCardsBackButton={handleCardsBackButton}/>) ||
                (selectIssueCard[1] && <UnableToFindSatView handleCardsBackButton={handleCardsBackButton}/>) ||
                (selectIssueCard[2] && <ModemLockView handleCardsBackButton={handleCardsBackButton}/>)
            }
        </div>
    );
}

export default PointAndPeakTSView;