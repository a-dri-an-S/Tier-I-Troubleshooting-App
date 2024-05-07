import "../../styles/NetworkIssues/NetworkIssueCards.css";

const NetworkIssuesCards = ({ handleNetworkIssueSelect }) => {
    return (
        <div className="network-issue-cards-sect">
            <h1 className="network-issue-title">Network Issues</h1>
            <div className="network-issue-cards-cont">
                <div
                    className="network-issue-card"
                    id="0"
                    onClick={(e) => handleNetworkIssueSelect(e)}
                >
                    <h2 className="network-issue-card-title">Slow Speeds</h2>
                </div>
                <div
                    className="network-issue-card"
                    id="1"
                    onClick={(e) => handleNetworkIssueSelect(e)}
                >
                    <h2 className="network-issue-card-title">No Internet Connection</h2>
                </div>
            </div>
        </div>
    );
}

export default NetworkIssuesCards;