import { Link } from "react-router-dom";
import "../../styles/ModemIssues/ModemIssuesPage.css";

const ModemIssuesPage = ({ toggleDark }) => {

    const toggleTitle = `modem-issues-title ${toggleDark ? 'dark-title' : 'light-title'}`
    const toggleCard = `modem-issue-card ${toggleDark ? 'dark-card' : 'light-card'}`;

    return (
        <section className="modem-issues-page">
            <h1 className={toggleTitle}>Modem Issues</h1>
            <div className="modem-issue-cards-cont">

                <Link className="link" to="offline/">
                    <div className={toggleCard} >
                        <h2 className="modem-issue-card-title">Modem Offline (Status Light Red)</h2>
                    </div>
                </Link>
                <Link className="link" to="nowifi/">
                    <div className={toggleCard} >
                        <h2 className="modem-issue-card-title">No Wi-Fi</h2>
                    </div>
                </Link>
                <Link className="link" to="ethports/">
                    <div className={toggleCard} >
                        <h2 className="modem-issue-card-title">Ethernet Ports Not Working</h2>
                    </div>
                </Link>
            </div>
        </section>
    );
}

export default ModemIssuesPage;