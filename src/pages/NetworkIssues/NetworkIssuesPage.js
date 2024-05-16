import "../../styles/NetworkIssues/NetworkIssuesPage.css";

const NetworkIssuesPage = () => {
    return (
        <section className="network-issues-page">
            <h1 className="network-issues-title">Network Issues</h1>
            <div className="network-issue-cards-cont">
                <div
                    className="network-issue-card"
                    id="0"
                    // onClick={(e) => handleNetworkIssueSelect(e)}
                >
                    <h2 className="network-issue-card-title">Slow Speeds</h2>
                </div>
                <div
                    className="network-issue-card"
                    id="1"
                    // onClick={(e) => handleNetworkIssueSelect(e)}
                >
                    <h2 className="network-issue-card-title">No Internet Connection</h2>
                </div>
            </div>

        </section>
    );
}

export default NetworkIssuesPage;