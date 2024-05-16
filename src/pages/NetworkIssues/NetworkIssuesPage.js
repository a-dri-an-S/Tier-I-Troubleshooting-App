import { Link } from "react-router-dom";

import "../../styles/NetworkIssues/NetworkIssuesPage.css";

const NetworkIssuesPage = () => {
    return (
        <section className="network-issues-page">
            <h1 className="network-issues-title">Network Issues</h1>
            <div className="network-issue-cards-cont">
                <Link className="link" to="slwspds/">
                    <div className="network-issue-card" >
                        <h2 className="network-issue-card-title">Slow Speeds</h2>
                    </div>
                </Link>
                <Link className="link" to="noint/">
                    <div className="network-issue-card" >
                        <h2 className="network-issue-card-title">No Internet Connection</h2>
                    </div>
                </Link>
            </div>
        </section>
    );
}

export default NetworkIssuesPage;