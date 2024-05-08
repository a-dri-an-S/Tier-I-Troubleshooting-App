import NoTRIATonesView from "./NoTRIATonesView";
import UnableToFindSatView from "./UnableToFindSatView";
import ModemLockView from "./ModemLockView";

const PointAndPeakTSView = ({ selectIssueCard }) => {
    return (
        <div className="pnp-ts-view">
            {
                (selectIssueCard[0] && <NoTRIATonesView />) ||
                (selectIssueCard[1] && <UnableToFindSatView />) ||
                (selectIssueCard[2] && <ModemLockView />)
            }
        </div>
    );
}

export default PointAndPeakTSView;