import "../../styles/ModemIssues/ModemIssuesPage.css";

const ModemIssuesPage = () => {
    return (
        <section className="modem-issues-page">
            <h1 className="modem-issues-title">Modem Issues</h1>
            <div className="modem-issue-cards-cont">
                <div
                    className="modem-issue-card"
                    id="0"
                    // onClick={(e) => handleModemIssueSelect(e)}
                >
                    <h2 className="modem-issue-card-title">Modem Offline (Status Light Red)</h2>
                </div>
                <div
                    className="modem-issue-card"
                    id="1"
                    // onClick={(e) => handleModemIssueSelect(e)}
                >
                    <h2 className="modem-issue-card-title">No Wi-Fi</h2>
                </div>
                <div
                    className="modem-issue-card"
                    id="2"
                    // onClick={(e) => handleModemIssueSelect(e)}
                >
                    <h2 className="modem-issue-card-title">Ethernet Ports Not Working</h2>
                </div>
            </div>
        </section>
    );
}

export default ModemIssuesPage;