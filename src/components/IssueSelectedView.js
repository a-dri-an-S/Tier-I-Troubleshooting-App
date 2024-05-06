import ModemIssuesView from './ModemIssues/ModemIssuesView';
import NetworkIssuesView from './NetworkIssues/NetworkIssuesView';
import PointAndPeakView from './PointAndPeak/PointAndPeakView';
import ProvisioningFailureView from './ProvisioningFailure/ProvisioningFailureView';
import QOIView from './QOI/QOIView';


const IssueSelectedView = ({ selectMainCard }) => {
    return (
        <div className="issue-selected-view">
            {
                (selectMainCard[0] && <ModemIssuesView />) ||
                (selectMainCard[1] && <NetworkIssuesView />) ||
                (selectMainCard[2] && <PointAndPeakView />) ||
                (selectMainCard[3] && <ProvisioningFailureView />) ||
                (selectMainCard[4] && <QOIView />)
            }
            
        </div>
    );
}

export default IssueSelectedView;