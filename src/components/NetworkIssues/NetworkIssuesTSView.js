import SlowSpeedsView from "./SlowSpeedsView";
import NoInternetConnectionView from "./NoInternetConnectionView";

const NetworkIssuesTSView = ({ selectIssueCard, handleCardsBackButton }) => {
    return (
        <div className="network-issues-ts-view">
            {
                (selectIssueCard[0] && <SlowSpeedsView handleCardsBackButton={handleCardsBackButton}/>) ||
                (selectIssueCard[1] && <NoInternetConnectionView handleCardsBackButton={handleCardsBackButton}/>)
            }
            
        </div>
    );
}

export default NetworkIssuesTSView;