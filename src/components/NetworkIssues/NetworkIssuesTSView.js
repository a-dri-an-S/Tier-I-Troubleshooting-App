import SlowSpeedsView from "./SlowSpeedsView";
import NoInternetConnectionView from "./NoInternetConnectionView";

const NetworkIssuesTSView = ({ selectIssueCard }) => {
    return (
        <div className="network-issues-ts-view">
            {
                (selectIssueCard[0] && <SlowSpeedsView />) ||
                (selectIssueCard[1] && <NoInternetConnectionView />)
            }
            
        </div>
    );
}

export default NetworkIssuesTSView;